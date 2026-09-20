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

.hq07l-beb {
  fill: currentColor;
  d: path("M15 18a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.mplr9elex {
  d: path("M15 18a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.wmhzb8pmw {
  d: path("m3 3 10 10");
}
</style><g class="hntgybcog"><path class="hq07l-beb"/><path class="wmhzb8pmw"/><path class="mplr9elex"/></g>`,
		"fallback": "iconmind:endpoint-duotone-thin",
	});
}

export default Component;
