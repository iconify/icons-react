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

.okc431vzg {
  d: path("M14 6a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0m-3 11a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0");
}

.r9gx__b9j {
  d: path("M3.5 11a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0");
}
</style><g class="hntgybcog"><path class="r9gx__b9j"/><path class="okc431vzg"/></g>`,
		"fallback": "uix:bokeh",
	});
}

export default Component;
