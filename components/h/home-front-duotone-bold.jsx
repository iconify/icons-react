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

.p1o66tbln {
  fill: currentColor;
  d: path("M9 8h6v4H9Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.y334m4yqh {
  d: path("M9 8h6v4H9Z");
}

.y7d5mpfbz {
  d: path("M10 20v-5h4v5");
}
</style><g class="s0phu2bbs"><path class="bw1t57bti"/><path class="p1o66tbln"/><path class="hwufvfb8q"/><path class="y7d5mpfbz"/><path class="y334m4yqh"/></g>`,
		"fallback": "iconmind:home-front-duotone-bold",
	});
}

export default Component;
