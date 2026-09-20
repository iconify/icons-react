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

.hwufvfb8q {
  d: path("M3 20v-8l9 -9 9 9v8Z");
}

.lg-3ttj_m {
  d: path("M6 16.5h12");
}

.wlp3ibbib {
  d: path("M6 13h12");
}
</style><g class="hntgybcog"><path class="hwufvfb8q"/><path class="wlp3ibbib"/><path class="lg-3ttj_m"/></g>`,
		"fallback": "iconmind:garage-outline-thin",
	});
}

export default Component;
