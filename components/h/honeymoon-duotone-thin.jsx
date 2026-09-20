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

.p0x-f5bdp {
  fill: currentColor;
  d: path("M12 14a2 2 0 0 1 4 0 2 2 0 0 1 4 0l-4 4Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.w8a4-ib_b {
  fill: currentColor;
  d: path("M3 9a3 3 0 0 1 6 0 3 3 0 0 1 6 0l-6 6Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.xptqu8bzs {
  d: path("M3 9a3 3 0 0 1 6 0 3 3 0 0 1 6 0l-6 6Z");
}

.zhn1ajhpt {
  d: path("M12 14a2 2 0 0 1 4 0 2 2 0 0 1 4 0l-4 4Z");
}
</style><g class="hntgybcog"><path class="w8a4-ib_b"/><path class="p0x-f5bdp"/><path class="xptqu8bzs"/><path class="zhn1ajhpt"/></g>`,
		"fallback": "iconmind:honeymoon-duotone-thin",
	});
}

export default Component;
