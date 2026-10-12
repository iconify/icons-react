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
		"content": `<style>.dbgvcxwad {
  cx: 12px;
  cy: 12px;
  r: 9.25px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.oa38kspif {
  d: path("M8 11.5a4 4 0 0 1 8 0m-6.75 0H8a1 1 0 0 0-1 1V15a1 1 0 0 0 1 1h1.25Zm5.5 0H16a1 1 0 0 1 1 1V15a1 1 0 0 1-1 1h-1.25Z");
}
</style><g class="hntgybcog"><circle class="dbgvcxwad"/><path class="oa38kspif"/></g>`,
		"fallback": "iconoven:ear-protection",
	});
}

export default Component;
