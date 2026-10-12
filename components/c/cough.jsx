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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ohw45dbbb {
  cx: 9px;
  cy: 12px;
  r: 6.25px;
}

.widebgbio {
  d: path("M6 10.25h1.75m2.5 0H12m-3 3a1 1 0 1 1 0 2a1 1 0 1 1 0-2m8-3.5a3 3 0 0 1 0 4.5m2-6a5.25 5.25 0 0 1 0 7.5");
}
</style><g class="hntgybcog"><circle class="ohw45dbbb"/><path class="widebgbio"/></g>`,
		"fallback": "iconoven:cough",
	});
}

export default Component;
