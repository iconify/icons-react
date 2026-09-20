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
		"content": `<style>.fg2i8dbhu {
  fill: currentColor;
  d: path("M1 6a5 5 0 0 1 10 0zm.1 1a5.002 5.002 0 0 0 9.8 0z");
}
</style><path class="fg2i8dbhu"/>`,
		"fallback": "fluent:circle-line-12-filled",
	});
}

export default Component;
