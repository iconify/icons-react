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

.lzjw7bcdy {
  d: path("M14 18v-5h4");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.ydpucsi6v {
  d: path("M2 18a10 10 0 0 1 20 0");
}
</style><g class="s0phu2bbs"><path class="ydpucsi6v"/><path class="bod4n0b3z"/><path class="ar9f68bct"/><path class="a5uqb5btg"/><path class="lzjw7bcdy"/></g>`,
		"fallback": "iconmind:ecosystem-outline-bold",
	});
}

export default Component;
