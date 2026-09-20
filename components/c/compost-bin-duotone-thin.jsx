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
		"content": `<style>.cfeplwbzd {
  d: path("M12 17c-3 0 -4 -2 -4 -4 3 0 4 2 4 4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rw4xuxb2g {
  d: path("M6 10v10h12V10Z");
}

.svay_hbrn {
  fill: currentColor;
  d: path("M12 17c-3 0 -4 -2 -4 -4 3 0 4 2 4 4");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.vkp-1wbef {
  fill: currentColor;
  d: path("M6 10v10h12V10Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.vn6-di86m {
  d: path("M4 7h16");
}
</style><g class="hntgybcog"><path class="vkp-1wbef"/><path class="svay_hbrn"/><path class="rw4xuxb2g"/><path class="vn6-di86m"/><path class="cfeplwbzd"/></g>`,
		"fallback": "iconmind:compost-bin-duotone-thin",
	});
}

export default Component;
