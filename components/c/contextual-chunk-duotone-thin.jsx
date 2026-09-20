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
		"content": `<style>.abnm6smsv {
  d: path("M13 3H6v18h12V8");
}

.d44oi8n-t {
  fill: currentColor;
  d: path("M9.5 11v6h5v-6Z");
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

.viu8yrbsc {
  d: path("M9.5 11v6h5v-6Z");
}

.ymqlmabed {
  d: path("M8 8h7");
}

.yxow7abeb {
  fill: currentColor;
  d: path("M13 3H6v18h12V8");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="yxow7abeb"/><path class="d44oi8n-t"/><path class="abnm6smsv"/><path class="ymqlmabed"/><path class="viu8yrbsc"/></g>`,
		"fallback": "iconmind:contextual-chunk-duotone-thin",
	});
}

export default Component;
