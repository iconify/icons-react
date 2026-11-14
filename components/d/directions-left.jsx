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
		"content": `<style>.ae_c_u16f {
  d: path("M14.5 15.5v-3a2 2 0 0 0-2-2h-4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jefgrcc3u {
  d: path("m14.475 4.725l4.8 4.8a3.5 3.5 0 0 1 0 4.95l-4.8 4.8a3.5 3.5 0 0 1-4.95 0l-4.8-4.8a3.5 3.5 0 0 1 0-4.95l4.8-4.8a3.5 3.5 0 0 1 4.95 0");
}

.n7h80pb2l {
  d: path("m10.5 8.5l-2 2l2 2");
}
</style><g class="hntgybcog"><path class="jefgrcc3u"/><path class="ae_c_u16f"/><path class="n7h80pb2l"/></g>`,
		"fallback": "uix:directions-left",
	});
}

export default Component;
