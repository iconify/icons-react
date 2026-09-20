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

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hwufvfb8q {
  d: path("M3 20v-8l9 -9 9 9v8Z");
}

.i5wd616ky {
  d: path("M12 10v8");
}

.mvm7r4bea {
  d: path("M8 14h8");
}
</style><g class="hntgybcog"><path class="bw1t57bti"/><path class="hwufvfb8q"/><path class="i5wd616ky"/><path class="mvm7r4bea"/></g>`,
		"fallback": "iconmind:home-care-duotone-thin",
	});
}

export default Component;
