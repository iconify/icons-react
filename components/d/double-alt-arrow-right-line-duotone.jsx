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

.l9qio6kvn {
  d: path("M11 19L17 12L11 5");
}

.mf220r04w {
  d: path("M6.99982 18.9999L12.9998 11.9999L6.99982 4.99988");
  opacity: var(--svg-opacity--0-5, 0.5);
}
</style><g class="hntgybcog"><path class="l9qio6kvn"/><path class="mf220r04w"/></g>`,
		"fallback": "solar:double-alt-arrow-right-line-duotone",
	});
}

export default Component;
