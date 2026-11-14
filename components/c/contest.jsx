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

.u52kfqbkq {
  d: path("M6.5 5H4v2a3 3 0 0 0 3 3m10.5-5H20v2a3 3 0 0 1-3 3m-5 4v3.5m-2.75 0h5.5a1.75 1.75 0 0 1 1.75 1.75A1.75 1.75 0 0 1 14.75 21h-5.5a1.75 1.75 0 0 1-1.75-1.75a1.75 1.75 0 0 1 1.75-1.75");
}

.wplnp7bje {
  d: path("M6.5 3h11v5.5a5.5 5.5 0 0 1-11 0Z");
}
</style><g class="hntgybcog"><path class="wplnp7bje"/><path class="u52kfqbkq"/></g>`,
		"fallback": "uix:contest",
	});
}

export default Component;
