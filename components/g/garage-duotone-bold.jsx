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
		"content": `<style>.bw1t57bti {
  fill: currentColor;
  d: path("M3 20v-8l9 -9 9 9v8Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.hwufvfb8q {
  d: path("M3 20v-8l9 -9 9 9v8Z");
}

.lg-3ttj_m {
  d: path("M6 16.5h12");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.wlp3ibbib {
  d: path("M6 13h12");
}
</style><g class="s0phu2bbs"><path class="bw1t57bti"/><path class="hwufvfb8q"/><path class="wlp3ibbib"/><path class="lg-3ttj_m"/></g>`,
		"fallback": "iconmind:garage-duotone-bold",
	});
}

export default Component;
