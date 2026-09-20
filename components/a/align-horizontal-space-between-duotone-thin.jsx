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
		"content": `<style>.fhbl5kbmk {
  d: path("M21 3v18");
}

.h8ap6qb-d {
  fill: currentColor;
  d: path("M14 7h4v10h-4Z");
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

.qkig0y_8f {
  d: path("M6 7h4v10H6Z");
}

.sw6_egbdo {
  d: path("M14 7h4v10h-4Z");
}

.uw5kuce7r {
  d: path("M3 3v18");
}

.wk7qv1b_m {
  fill: currentColor;
  d: path("M6 7h4v10H6Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="wk7qv1b_m"/><path class="h8ap6qb-d"/><path class="uw5kuce7r"/><path class="qkig0y_8f"/><path class="sw6_egbdo"/><path class="fhbl5kbmk"/></g>`,
		"fallback": "iconmind:align-horizontal-space-between-duotone-thin",
	});
}

export default Component;
