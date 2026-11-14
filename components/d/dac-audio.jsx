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

.i0felcflz {
  d: path("M9 12q1.5-3.75 3 0t3 0");
}

.wn2esck6e {
  d: path("M9 5.5h6A3.5 3.5 0 0 1 18.5 9v6a3.5 3.5 0 0 1-3.5 3.5H9A3.5 3.5 0 0 1 5.5 15V9A3.5 3.5 0 0 1 9 5.5m-6.5 3h3m-3 3.5h3m-3 3.5h3m13-7h3m-3 3.5h3m-3 3.5h3");
}
</style><g class="hntgybcog"><path class="wn2esck6e"/><path class="i0felcflz"/></g>`,
		"fallback": "uix:dac-audio",
	});
}

export default Component;
