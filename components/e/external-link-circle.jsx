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

.l235kx_vi {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0M9 15l6-6");
}

.oxy-4pqdz {
  d: path("M10.5 9H15v4.5");
}
</style><g class="hntgybcog"><path class="l235kx_vi"/><path class="oxy-4pqdz"/></g>`,
		"fallback": "uix:external-link-circle",
	});
}

export default Component;
