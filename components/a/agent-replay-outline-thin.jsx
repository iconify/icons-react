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

.ie2eafbvn {
  d: path("m11 9 -3 3 3 3");
}

.ugdbidcqi {
  d: path("M16.23 2.94a10 10 0 1 1 -8.46 0");
}

.ypoxwcbes {
  d: path("m16 9 -3 3 3 3");
}
</style><g class="hntgybcog"><path class="ugdbidcqi"/><path class="ie2eafbvn"/><path class="ypoxwcbes"/></g>`,
		"fallback": "iconmind:agent-replay-outline-thin",
	});
}

export default Component;
