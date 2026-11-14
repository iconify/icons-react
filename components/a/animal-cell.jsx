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
		"content": `<style>.grspffbih {
  d: path("M6 10a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0m7 6.25a2.5 1.5 0 1 0 5 0a2.5 1.5 0 1 0-5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z57loibgb {
  d: path("M11 2.5c5.5-.5 10.5 3 10.5 9s-4.5 10-10 10s-9-3.5-9-9s3-9.5 8.5-10");
}
</style><g class="hntgybcog"><path class="z57loibgb"/><path class="grspffbih"/></g>`,
		"fallback": "uix:animal-cell",
	});
}

export default Component;
