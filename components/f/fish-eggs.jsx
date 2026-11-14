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
		"content": `<style>.dg3betb3t {
  d: path("M6 9.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0m6 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0");
}

.gesfnkz9h {
  d: path("M3 14.75a3 3 0 1 0 6 0a3 3 0 1 0-6 0m6 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0m6 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="dg3betb3t"/><path class="gesfnkz9h"/></g>`,
		"fallback": "uix:fish-eggs",
	});
}

export default Component;
