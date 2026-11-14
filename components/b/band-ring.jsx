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
		"content": `<style>.bqnb7_3lf {
  d: path("M6 10.25a6 2 0 1 0 12 0a6 2 0 1 0-12 0");
}

.crt2xgbyp {
  d: path("M3 10.25v3.25a9 5.25 0 0 0 18 0v-3.25");
}

.exvvozbzj {
  d: path("M3 10.25a9 5.25 0 1 0 18 0a9 5.25 0 1 0-18 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="exvvozbzj"/><path class="crt2xgbyp"/><path class="bqnb7_3lf"/></g>`,
		"fallback": "uix:band-ring",
	});
}

export default Component;
