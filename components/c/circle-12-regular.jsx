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
		"content": `<style>.e9gj4rbys {
  fill: currentColor;
  d: path("M6 2a4 4 0 1 0 0 8a4 4 0 0 0 0-8M1 6a5 5 0 1 1 10 0A5 5 0 0 1 1 6");
}
</style><path class="e9gj4rbys"/>`,
		"fallback": "fluent:circle-12-regular",
	});
}

export default Component;
