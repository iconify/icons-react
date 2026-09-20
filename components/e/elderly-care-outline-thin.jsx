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
		"content": `<style>.cvlyf4b3z {
  d: path("m4 20 5 -5 5 5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kjs-2gbxx {
  d: path("M9 8v6");
}

.qdda4miup {
  d: path("M14 20a5 5 0 0 1 7 -7");
}

.xvse_9aut {
  d: path("M6 5a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}
</style><g class="hntgybcog"><path class="xvse_9aut"/><path class="kjs-2gbxx"/><path class="cvlyf4b3z"/><path class="qdda4miup"/></g>`,
		"fallback": "iconmind:elderly-care-outline-thin",
	});
}

export default Component;
