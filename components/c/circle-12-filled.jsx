import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.y0jyw_4sp {
  fill: currentColor;
  d: path("M6 1a5 5 0 1 0 0 10A5 5 0 0 0 6 1");
}
</style><path class="y0jyw_4sp"/>`,
		"fallback": "fluent:circle-12-filled",
	});
}

export default Component;
