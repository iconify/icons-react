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
		"content": `<style>.bwvsz2b2k {
  d: path("M3.5 3v17.5h9.8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ikdf4xbna {
  d: path("M6.5 10.5c2-5.5 4-5.5 6-2s4 1.5 7-4m-13 12c2-5.5 4-5.5 6-3.5m5.5 1.5v7M14.5 18h7");
}
</style><g class="hntgybcog"><path class="bwvsz2b2k"/><path class="ikdf4xbna"/></g>`,
		"fallback": "uix:chart-series-add",
	});
}

export default Component;
