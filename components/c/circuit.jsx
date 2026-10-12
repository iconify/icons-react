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

.q9-aapbwy {
  d: path("M10.5 2.75v4m3-3v2");
}

.rip_g9cqu {
  cx: 12px;
  cy: 19.25px;
  r: 2px;
}

.v-okrzb7m {
  d: path("M10.5 4.75H6.25a2.5 2.5 0 0 0-2.5 2.5v9.5a2.5 2.5 0 0 0 2.5 2.5H10m3.5-14.5h4.25a2.5 2.5 0 0 1 2.5 2.5v9.5a2.5 2.5 0 0 1-2.5 2.5H14");
}
</style><g class="hntgybcog"><path class="v-okrzb7m"/><circle class="rip_g9cqu"/><path class="q9-aapbwy"/></g>`,
		"fallback": "iconoven:circuit",
	});
}

export default Component;
