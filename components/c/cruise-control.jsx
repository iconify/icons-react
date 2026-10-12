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
		"content": `<style>.aod8jqbni {
  d: path("M13.24 11.76L15.5 9.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hvgdv64iz {
  cx: 12px;
  cy: 13px;
  r: 1.75px;
}

.mp1jjnbtm {
  d: path("m18.25 11.5l1.5 1.5l1.5-1.5");
}

.yda0a_kfi {
  d: path("M6.52 18.48A7.75 7.75 0 1 1 19.75 13");
}
</style><g class="hntgybcog"><path class="yda0a_kfi"/><path class="mp1jjnbtm"/><circle class="hvgdv64iz"/><path class="aod8jqbni"/></g>`,
		"fallback": "iconoven:cruise-control",
	});
}

export default Component;
