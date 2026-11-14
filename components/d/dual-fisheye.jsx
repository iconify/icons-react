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

.y9oe4n3ki {
  d: path("M4.25 12a2.5 2.5 0 0 1 2.5-2.5m8 2.5a2.5 2.5 0 0 1 2.5-2.5");
}

.zz4qdmb5c {
  d: path("M2.25 12a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0m10.5 0a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0");
}
</style><g class="hntgybcog"><path class="zz4qdmb5c"/><path class="y9oe4n3ki"/></g>`,
		"fallback": "uix:dual-fisheye",
	});
}

export default Component;
