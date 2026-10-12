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
		"content": `<style>.awisu_bpo {
  width: 18px;
  height: 3.75px;
  x: 3px;
  y: 17.25px;
  rx: 1.25px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.khl37jain {
  d: path("M7.5 17.25V21m4.5-3.75V21m4.5-3.75V21");
}

.rehbgwrxu {
  d: path("m5.5 14.25l6.5-11l6.5 11m-10.65-4h8.3");
}
</style><g class="hntgybcog"><path class="rehbgwrxu"/><rect class="awisu_bpo"/><path class="khl37jain"/></g>`,
		"fallback": "iconoven:gradient",
	});
}

export default Component;
