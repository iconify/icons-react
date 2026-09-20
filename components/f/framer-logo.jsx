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
		"content": `<style>.d8j_6tbas {
  fill: currentColor;
  d: path("M208 104V40a8 8 0 0 0-8-8H56a8 8 0 0 0-5.31 14L107 96H56a8 8 0 0 0-8 8v64a8 8 0 0 0 2.34 5.66l72 72A8 8 0 0 0 136 240v-64h64a8 8 0 0 0 5.31-14L149 112h51a8 8 0 0 0 8-8m-29 56h-51a8 8 0 0 0-8 8v52.69l-56-56V112h61Zm13-64h-61L77 48h115Z");
}
</style><path class="d8j_6tbas"/>`,
		"fallback": "ph:framer-logo",
	});
}

export default Component;
