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
		"content": `<style>.c1hamx9wx {
  d: path("m5.84 18.16l-2.09 2.09m14.41-2.09l2.09 2.09");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nws0t4bap {
  d: path("M8.66 15.34L20.75 3.25m-5.41 12.09L3.25 3.25");
}

.qyq1ufe5w {
  cx: 7.25px;
  cy: 16.75px;
  r: 2px;
}

.xao2t476j {
  cx: 16.75px;
  cy: 16.75px;
  r: 2px;
}
</style><g class="hntgybcog"><path class="nws0t4bap"/><circle class="qyq1ufe5w"/><circle class="xao2t476j"/><path class="c1hamx9wx"/></g>`,
		"fallback": "iconoven:fencing-mask",
	});
}

export default Component;
