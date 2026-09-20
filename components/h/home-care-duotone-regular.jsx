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

.i5wd616ky {
  d: path("M12 10v8");
}

.mvm7r4bea {
  d: path("M8 14h8");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="bw1t57bti"/><path class="hwufvfb8q"/><path class="i5wd616ky"/><path class="mvm7r4bea"/></g>`,
		"fallback": "iconmind:home-care-duotone-regular",
	});
}

export default Component;
