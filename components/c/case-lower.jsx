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
		"content": `<style>.c2y_labmc {
  d: path("M10.75 11v8.25");
}

.hiyce_7rc {
  d: path("M13.75 4.75v14.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.it_k9ghhm {
  cx: 6.75px;
  cy: 15px;
  r: 4px;
}

.plcwa1btj {
  cx: 17.5px;
  cy: 15.5px;
  r: 3.75px;
}
</style><g class="hntgybcog"><circle class="it_k9ghhm"/><path class="c2y_labmc"/><circle class="plcwa1btj"/><path class="hiyce_7rc"/></g>`,
		"fallback": "iconoven:case-lower",
	});
}

export default Component;
