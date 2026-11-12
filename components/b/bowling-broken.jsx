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
		"content": `<style>.dcgw77bis {
  cx: 12px;
  cy: 12px;
  r: 1.5px;
}

.hhov-gbog {
  cx: 12px;
  cy: 7px;
  r: 1.5px;
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ko6o-6b9b {
  d: path("M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7");
}

.soqsp2xkn {
  d: path("M8 8C8.82843 8 9.5 8.67157 9.5 9.5C9.5 10.3284 8.82843 11 8 11C7.17157 11 6.5 10.3284 6.5 9.5C6.5 8.67157 7.17157 8 8 8Z");
}
</style><g class="ipq1z-bjh"><circle class="hhov-gbog"/><circle class="dcgw77bis"/><path class="soqsp2xkn"/><path class="ko6o-6b9b"/></g>`,
		"fallback": "solar:bowling-broken",
	});
}

export default Component;
