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
		"content": `<style>.a5uqb5btg {
  d: path("M9 14v4");
}

.ar9f68bct {
  d: path("M6 11a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.bod4n0b3z {
  d: path("M2 18h20");
}

.c4be54b1f {
  fill: currentColor;
  d: path("M6 11a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lzjw7bcdy {
  d: path("M14 18v-5h4");
}

.ydpucsi6v {
  d: path("M2 18a10 10 0 0 1 20 0");
}
</style><g class="hntgybcog"><path class="c4be54b1f"/><path class="ydpucsi6v"/><path class="bod4n0b3z"/><path class="ar9f68bct"/><path class="a5uqb5btg"/><path class="lzjw7bcdy"/></g>`,
		"fallback": "iconmind:ecosystem-duotone-thin",
	});
}

export default Component;
