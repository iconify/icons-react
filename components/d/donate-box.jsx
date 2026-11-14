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
		"content": `<style>.en82bxb_w {
  d: path("M12 13L7.75 8.75A2.75 2.75 0 0 1 12 5.25a2.75 2.75 0 0 1 4.25 3.5Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.p_trv01ls {
  d: path("M4.5 10v9A1.5 1.5 0 0 0 6 20.5h12a1.5 1.5 0 0 0 1.5-1.5v-9m-15 0l-2-3m17 3l2-3");
}
</style><g class="hntgybcog"><path class="p_trv01ls"/><path class="en82bxb_w"/></g>`,
		"fallback": "uix:donate-box",
	});
}

export default Component;
