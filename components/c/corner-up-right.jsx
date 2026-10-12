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
		"content": `<style>.ft6epebfu {
  d: path("m15.5 13l3.75-3.75L15.5 5.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.r-m55rnhv {
  d: path("M4.25 19.75v-8a2.5 2.5 0 0 1 2.5-2.5h12.5");
}
</style><g class="hntgybcog"><path class="r-m55rnhv"/><path class="ft6epebfu"/></g>`,
		"fallback": "iconoven:corner-up-right",
	});
}

export default Component;
