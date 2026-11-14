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
		"content": `<style>.exqbttr7j {
  d: path("M10.875 8.25h2.25a2.625 2.625 0 0 1 2.625 2.625v2.25a2.625 2.625 0 0 1-2.625 2.625h-2.25a2.625 2.625 0 0 1-2.625-2.625v-2.25a2.625 2.625 0 0 1 2.625-2.625M12 12h.01");
}

.g_zl59jtl {
  d: path("M2.5 12C4.5 7 8 4.5 12 4.5S19.5 7 21.5 12c-2 5-5.5 7.5-9.5 7.5S4.5 17 2.5 12");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="g_zl59jtl"/><path class="exqbttr7j"/></g>`,
		"fallback": "uix:computer-vision",
	});
}

export default Component;
