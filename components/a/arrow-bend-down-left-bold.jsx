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
		"content": `<style>.u4s0utbwi {
  fill: currentColor;
  d: path("M236 56a108.12 108.12 0 0 1-108 108H61l27.52 27.51a12 12 0 0 1-17 17l-48-48a12 12 0 0 1 0-17l48-48a12 12 0 0 1 17 17L61 140h67a84.09 84.09 0 0 0 84-84a12 12 0 0 1 24 0");
}
</style><path class="u4s0utbwi"/>`,
		"fallback": "ph:arrow-bend-down-left-bold",
	});
}

export default Component;
