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
		"content": `<style>.vlmop4nxd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 3c3 4 3 14 0 18c-3-4-3-14 0-18M2.5 7.5h6m-6 9h6m7-9l6 4.5l-6 4.5");
}
</style><path class="vlmop4nxd"/>`,
		"fallback": "uix:convex-lens",
	});
}

export default Component;
