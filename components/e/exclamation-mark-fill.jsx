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
		"content": `<style>.xhsk8_bue {
  fill: currentColor;
  d: path("M200 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16m-72 136a12 12 0 1 1-12 12a12 12 0 0 1 12-12m-8-24V80a8 8 0 0 1 16 0v56a8 8 0 0 1-16 0");
}
</style><path class="xhsk8_bue"/>`,
		"fallback": "ph:exclamation-mark-fill",
	});
}

export default Component;
