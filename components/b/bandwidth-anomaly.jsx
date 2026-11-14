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
		"content": `<style>.xb05rnb7h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 16H6l1.5-2.5L9 16h1.5l2-12l2 12H16l1.5-2.5L19 16h2.5m-19 4.5h19");
}
</style><path class="xb05rnb7h"/>`,
		"fallback": "uix:bandwidth-anomaly",
	});
}

export default Component;
