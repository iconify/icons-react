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
		"content": `<style>.a8qz153ka {
  fill: currentColor;
  d: path("M10 6h7v4h-7Z");
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

.v8xtwkb5y {
  d: path("M10 6c-2 1 -3 3 -3 4");
}

.w4onmpb6s {
  d: path("M10 6h7v4h-7Z");
}

.zuwyzt6-u {
  d: path("M13 10v12");
}
</style><g class="hntgybcog"><path class="a8qz153ka"/><path class="w4onmpb6s"/><path class="zuwyzt6-u"/><path class="v8xtwkb5y"/></g>`,
		"fallback": "iconmind:hammer-tool-duotone-thin",
	});
}

export default Component;
