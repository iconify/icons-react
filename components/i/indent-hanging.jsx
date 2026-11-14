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

.ur-gck66t {
  d: path("M3.5 4.5h17m-9 5h9m-9 5h9m-9 5h6M4.5 8v4h4");
}

.zuep11sta {
  d: path("M6.75 10.25L8.5 12l-1.75 1.75");
}
</style><g class="hntgybcog"><path class="ur-gck66t"/><path class="zuep11sta"/></g>`,
		"fallback": "uix:indent-hanging",
	});
}

export default Component;
