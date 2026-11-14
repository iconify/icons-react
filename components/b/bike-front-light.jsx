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
		"content": `<style>.ai_gztbjf {
  d: path("M2.5 4.5L5 6h14l2.5-1.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.loc7nfe9l {
  d: path("M8.5 9.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0M12 13v6.5m0-10h.01");
}
</style><g class="hntgybcog"><path class="ai_gztbjf"/><path class="loc7nfe9l"/></g>`,
		"fallback": "uix:bike-front-light",
	});
}

export default Component;
