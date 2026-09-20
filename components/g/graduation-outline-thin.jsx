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

.n6wz72bec {
  d: path("m2 10 4 -4h12l4 4 -4 4H6Z");
}

.s-lluab2i {
  d: path("M8 14v3l3 3h3l3 -3v-3");
}

.vtt_9-b1s {
  d: path("M22 10v6");
}
</style><g class="hntgybcog"><path class="n6wz72bec"/><path class="s-lluab2i"/><path class="vtt_9-b1s"/></g>`,
		"fallback": "iconmind:graduation-outline-thin",
	});
}

export default Component;
