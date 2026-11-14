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

.khckybfch {
  fill: currentColor;
  d: path("M5.75 6.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}

.onsbk59mc {
  d: path("M5.625 2.5h12.75A2.625 2.625 0 0 1 21 5.125v2.75a2.625 2.625 0 0 1-2.625 2.625H5.625A2.625 2.625 0 0 1 3 7.875v-2.75A2.625 2.625 0 0 1 5.625 2.5m0 10.75h12.75A2.625 2.625 0 0 1 21 15.875v2.75a2.625 2.625 0 0 1-2.625 2.625H5.625A2.625 2.625 0 0 1 3 18.625v-2.75a2.625 2.625 0 0 1 2.625-2.625");
}

.tdfi7pl0h {
  d: path("M5.75 17.25a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}
</style><g class="hntgybcog"><path class="onsbk59mc"/><path class="khckybfch"/><path class="tdfi7pl0h"/></g>`,
		"fallback": "uix:active-passive",
	});
}

export default Component;
