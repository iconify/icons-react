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

.mguz87bxd {
  d: path("m8 10 2 2 3 -3");
}

.ugdbidcqi {
  d: path("M16.23 2.94a10 10 0 1 1 -8.46 0");
}

.w7efwbzud {
  d: path("m11 14 2 2 3 -3");
}

.xa771-t-o {
  fill: currentColor;
  d: path("M16.23 2.94a10 10 0 1 1 -8.46 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="xa771-t-o"/><path class="ugdbidcqi"/><path class="mguz87bxd"/><path class="w7efwbzud"/></g>`,
		"fallback": "iconmind:agent-consensus-duotone-thin",
	});
}

export default Component;
