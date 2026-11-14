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

.jii-93bkx {
  d: path("M13.75 10.75L16.5 6.5h5m-7.75 6.75l2.75 4.25h5");
}

.jon3cybgf {
  d: path("M2.5 12h6m0 0a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0");
}
</style><g class="hntgybcog"><path class="jon3cybgf"/><path class="jii-93bkx"/></g>`,
		"fallback": "uix:coax-splitter",
	});
}

export default Component;
