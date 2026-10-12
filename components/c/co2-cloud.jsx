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

.m0ewde4zh {
  cx: 13.75px;
  cy: 15.5px;
  r: 1.5px;
}

.plmtydwed {
  d: path("M9.75 14.1a1.75 1.75 0 1 0 0 2.8");
}

.v9402bb4w {
  d: path("M6.75 19.6a4 4 0 0 1-.55-7.96a5.75 5.75 0 0 1 10.65-1.39a4.5 4.5 0 0 1-.6 9.35Z");
}
</style><g class="hntgybcog"><path class="v9402bb4w"/><path class="plmtydwed"/><circle class="m0ewde4zh"/></g>`,
		"fallback": "iconoven:co2-cloud",
	});
}

export default Component;
