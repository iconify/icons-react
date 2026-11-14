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
		"content": `<style>.yr-wxxbzq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 2.5V9H2.5M15 2.5V9h6.5m-19 6H9v6.5M21.5 15H15v6.5m-3-19V6m0 12v3.5M2.5 12H6m12 0h3.5");
}
</style><path class="yr-wxxbzq"/>`,
		"fallback": "uix:cross-road",
	});
}

export default Component;
