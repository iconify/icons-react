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
		"content": `<style>.cq9hjhbha {
  d: path("M2.5 9.25a6.75 6.75 0 1 0 13.5 0a6.75 6.75 0 1 0-13.5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jq6sbpbec {
  d: path("M6 9.25a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0M16 16l5.5 5.5m0-5v5h-5");
}
</style><g class="hntgybcog"><path class="cq9hjhbha"/><path class="jq6sbpbec"/></g>`,
		"fallback": "uix:button-trigger",
	});
}

export default Component;
