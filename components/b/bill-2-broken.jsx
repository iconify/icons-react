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
		"content": `<style>.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ok10udbbc {
  d: path("M8.5 13L15.5 13");
}

.pvep1hbek {
  d: path("M2 2H22");
}

.vhlnnlb3x {
  d: path("M8.5 8L15.5 8");
}

.y6oeklb7x {
  d: path("M8.04897 18.5309C9.93152 20.177 10.8728 21 12 21C13.1272 21 14.0685 20.177 15.951 18.5309L17.951 16.7822C18.9595 15.9004 19.4638 15.4595 19.7319 14.8691C20 14.2787 20 13.6091 20 12.27V9.70249M20 6V2H4V12.27C4 13.6091 4 14.2787 4.2681 14.8691C4.44333 15.255 4.71945 15.577 5.17131 16");
}
</style><g class="ipq1z-bjh"><path class="pvep1hbek"/><path class="y6oeklb7x"/><path class="ok10udbbc"/><path class="vhlnnlb3x"/></g>`,
		"fallback": "solar:bill-2-broken",
	});
}

export default Component;
