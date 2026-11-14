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
		"content": `<style>.b89r7bbcy {
  d: path("M2.25 9.25a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m15 0a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m-7.5 8a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k7xna-b7z {
  d: path("M9 2.5h6m-3 0V15m-7.5-3.5v.5a3 3 0 0 0 3 3h9a3 3 0 0 0 3-3v-.5");
}
</style><g class="hntgybcog"><path class="k7xna-b7z"/><path class="b89r7bbcy"/></g>`,
		"fallback": "uix:chandelier",
	});
}

export default Component;
