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

.iggzz_quh {
  d: path("M10.5 17v-5a2 2 0 0 1 2-2H15");
}

.ol-k0xutu {
  d: path("m13 8l2 2l-2 2");
}

.zkgd1_bez {
  d: path("M8.774 4.5h6.452a1.75 1.75 0 0 1 1.665 1.213l3.871 12A1.75 1.75 0 0 1 19.097 20H4.903a1.75 1.75 0 0 1-1.665-2.287l3.871-12A1.75 1.75 0 0 1 8.774 4.5");
}
</style><g class="hntgybcog"><path class="zkgd1_bez"/><path class="iggzz_quh"/><path class="ol-k0xutu"/></g>`,
		"fallback": "uix:ar-navigation",
	});
}

export default Component;
