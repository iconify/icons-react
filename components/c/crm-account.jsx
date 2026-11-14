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
		"content": `<style>.ci1nul-9j {
  d: path("M10 10.75a2 2 0 1 0 4 0a2 2 0 1 0-4 0M8 20a4 3.5 0 0 1 8 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v5vgenb3a {
  d: path("M2.5 6a2 2 0 0 1 2-2H9l2 2h8.5a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2Z");
}
</style><g class="hntgybcog"><path class="v5vgenb3a"/><path class="ci1nul-9j"/></g>`,
		"fallback": "uix:crm-account",
	});
}

export default Component;
