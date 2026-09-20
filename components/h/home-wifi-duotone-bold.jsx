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
		"content": `<style>.a24svzono {
  d: path("M7 14c3 -3 7 -3 10 0");
}

.bw1t57bti {
  fill: currentColor;
  d: path("M3 20v-8l9 -9 9 9v8Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.hwufvfb8q {
  d: path("M3 20v-8l9 -9 9 9v8Z");
}

.k_c02d4xz {
  d: path("M9.5 17c1.5 -1.5 3.5 -1.5 5 0");
}

.k-jt90-vx {
  d: path("M11 20a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.wm7ubgban {
  fill: currentColor;
  d: path("M11 20a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="s0phu2bbs"><path class="bw1t57bti"/><path class="wm7ubgban"/><path class="hwufvfb8q"/><path class="a24svzono"/><path class="k_c02d4xz"/><path class="k-jt90-vx"/></g>`,
		"fallback": "iconmind:home-wifi-duotone-bold",
	});
}

export default Component;
