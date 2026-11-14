import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.j869g0bvq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 12h6m6 0h6M6 9l-3 3l3 3m12-6l3 3l-3 3M12 4.5v15");
}
</style><path class="j869g0bvq"/>`,
		"fallback": "uix:bandwidth-limit",
	});
}

export default Component;
