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
		"content": `<style>.gcgmiybrc {
  d: path("M17.25 18c-3.5 2.5-9.25 2.5-13.5-.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kagbwcbhh {
  d: path("M6.75 6c3.5-2.5 9.25-2.5 13.5.5");
}

.ulfr24xqb {
  cx: 6.75px;
  cy: 8.75px;
  r: 2.75px;
}

.usz72eb9x {
  cx: 17.25px;
  cy: 15.25px;
  r: 2.75px;
}
</style><g class="hntgybcog"><circle class="ulfr24xqb"/><path class="kagbwcbhh"/><circle class="usz72eb9x"/><path class="gcgmiybrc"/></g>`,
		"fallback": "iconoven:cancer-sign",
	});
}

export default Component;
