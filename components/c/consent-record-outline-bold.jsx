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
		"content": `<style>.abnm6smsv {
  d: path("M13 3H6v18h12V8");
}

.c4khiwgvb {
  d: path("M8 15h8");
}

.njpqp_b0l {
  d: path("m9 10 2 2 4 -4");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.yd9az-bht {
  d: path("M8 18h5");
}
</style><g class="s0phu2bbs"><path class="abnm6smsv"/><path class="njpqp_b0l"/><path class="c4khiwgvb"/><path class="yd9az-bht"/></g>`,
		"fallback": "iconmind:consent-record-outline-bold",
	});
}

export default Component;
