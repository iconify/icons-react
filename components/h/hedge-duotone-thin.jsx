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

.jkuojibnm {
  d: path("M3 20h18");
}

.o8hzclkqx {
  d: path("M3 17v-5c0 -4 4 -7 9 -7s9 3 9 7v5Z");
}

.spx1xqb6w {
  fill: currentColor;
  d: path("M3 17v-5c0 -4 4 -7 9 -7s9 3 9 7v5Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="spx1xqb6w"/><path class="o8hzclkqx"/><path class="jkuojibnm"/></g>`,
		"fallback": "iconmind:hedge-duotone-thin",
	});
}

export default Component;
