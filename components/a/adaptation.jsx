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
		"content": `<style>.c4unwbcyb {
  d: path("M3.5 12a8.5 8.5 0 0 1 16-4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jx7o7fb4f {
  d: path("M3.75 18.75L4.5 16l2.75.75M10 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}

.vzhchmbsi {
  d: path("M20.25 5.25L19.5 8l-2.75-.75M20.5 12a8.5 8.5 0 0 1-16 4");
}
</style><g class="hntgybcog"><path class="c4unwbcyb"/><path class="vzhchmbsi"/><path class="jx7o7fb4f"/></g>`,
		"fallback": "uix:adaptation",
	});
}

export default Component;
