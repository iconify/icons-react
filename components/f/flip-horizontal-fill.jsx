import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.nxjw65bvf {
  fill: currentColor;
  d: path("M120 40v160a16 16 0 0 1-16 16H40a16 16 0 0 1-14.78-22.15l64-159.93l.06-.14A16 16 0 0 1 120 40m109.33 168.84A16 16 0 0 1 216 216h-64a16 16 0 0 1-16-16V40a16 16 0 0 1 30.74-6.23l.06.14l64 159.93a16 16 0 0 1-1.47 15M216 200l-.06-.15L152 40v160Z");
}
</style><path class="nxjw65bvf"/>`,
		"fallback": "ph:flip-horizontal-fill",
	});
}

export default Component;
