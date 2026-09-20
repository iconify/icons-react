import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.u-tf66b1a {
  fill: currentColor;
  d: path("M4.5 2.25A2.25 2.25 0 0 1 6.692 4H14a3 3 0 1 1 0 6H6a2 2 0 1 0 0 4h9.293l-1.646-1.646a.5.5 0 1 1 .707-.707l2.5 2.5a.5.5 0 0 1 0 .707l-2.5 2.5a.5.5 0 1 1-.707-.707L15.293 15H6a3 3 0 1 1 0-6h8a2 2 0 1 0 0-4H6.692A2.25 2.25 0 1 1 4.5 2.25m0 1a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5");
}
</style><path class="u-tf66b1a"/>`,
		"fallback": "fluent:flow-arrow-20-regular",
	});
}

export default Component;
