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
		"content": `<style>.d-kpsibpj {
  fill: currentColor;
  d: path("M240 208h-8V72a8 8 0 0 0-8-8h-40V40a8 8 0 0 0-8-8H80a8 8 0 0 0-8 8v56H32a8 8 0 0 0-8 8v104h-8a8 8 0 0 0 0 16h224a8 8 0 0 0 0-16M80 176H64a8 8 0 0 1 0-16h16a8 8 0 0 1 0 16m0-32H64a8 8 0 0 1 0-16h16a8 8 0 0 1 0 16m64 64h-32v-40h32Zm-8-64h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 0 16m0-32h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 0 16m0-32h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 0 16m56 96h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 0 16m0-32h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 0 16m0-32h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 0 16");
}
</style><path class="d-kpsibpj"/>`,
		"fallback": "ph:building-apartment-fill",
	});
}

export default Component;
