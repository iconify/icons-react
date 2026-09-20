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
		"content": `<style>.fxkurobsu {
  d: path("M17.5 10.5v3");
}

.mc3x0bbgo {
  d: path("M13 12a4.5 4.5 0 1 0 9 0 4.5 4.5 0 1 0 -9 0");
}

.n6qz8-ogr {
  d: path("M6.5 8.5 10 12l-3.5 3.5L3 12Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="n6qz8-ogr"/><path class="mc3x0bbgo"/><path class="fxkurobsu"/></g>`,
		"fallback": "iconmind:cheap-model-outline-bold",
	});
}

export default Component;
