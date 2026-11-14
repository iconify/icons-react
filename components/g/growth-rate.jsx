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

.vefwv_bky {
  d: path("M13.25 4.25L17 4l.75 3.75m-3 13.5l6.5-6.5m-5.75.75h.01m4.99 5h.01");
}

.vp4mrabmz {
  d: path("M2.5 14.5c4 0 7 0 9-2.5L17 4");
}
</style><g class="hntgybcog"><path class="vp4mrabmz"/><path class="vefwv_bky"/></g>`,
		"fallback": "uix:growth-rate",
	});
}

export default Component;
