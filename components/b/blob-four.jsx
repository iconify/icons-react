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

.intolcbtu {
  d: path("M7.5 7.5a4.5 4.5 0 0 1 9 0a4.5 4.5 0 0 1 0 9a4.5 4.5 0 0 1-9 0a4.5 4.5 0 0 1 0-9");
}

.votxt6b3q {
  d: path("M10.25 7.5A1.75 1.75 0 0 1 12 5.75");
}
</style><g class="hntgybcog"><path class="intolcbtu"/><path class="votxt6b3q"/></g>`,
		"fallback": "uix:blob-four",
	});
}

export default Component;
