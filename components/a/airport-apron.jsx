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
		"content": `<style>.bp74s_bbx {
  d: path("m5.5 13.5l6.5-4l6.5 4m-9.5 5l3-2l3 2");
}

.et_rxcq_l {
  d: path("M2.5 21.5v-17a2 2 0 0 1 2-2h15a2 2 0 0 1 2 2v17M12 5.5v13");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="et_rxcq_l"/><path class="bp74s_bbx"/></g>`,
		"fallback": "uix:airport-apron",
	});
}

export default Component;
