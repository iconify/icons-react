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
		"content": `<style>.c1nxh3m2e {
  d: path("m9 15 5 5 5 -5");
}

.g5tlcslpz {
  d: path("M4 4h10v16");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="g5tlcslpz"/><path class="c1nxh3m2e"/></g>`,
		"fallback": "iconmind:corner-right-down-outline-thin",
	});
}

export default Component;
