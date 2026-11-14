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
		"content": `<style>.eanni_blz {
  d: path("M3.5 3v17.5h9.6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ny63dtp3o {
  d: path("M6.5 14L10 8.5l3 2.5l6-6.5m-1 10v7m-3-3l3 3l3-3");
}
</style><g class="hntgybcog"><path class="eanni_blz"/><path class="ny63dtp3o"/></g>`,
		"fallback": "uix:chart-download",
	});
}

export default Component;
