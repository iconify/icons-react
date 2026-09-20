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
		"content": `<style>.ege_vlbjp {
  d: path("m8 12 6 6h7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j569280wv {
  d: path("M3 12h5l6 -6h7");
}

.ldxs-ebdf {
  d: path("M8 12h13");
}
</style><g class="hntgybcog"><path class="j569280wv"/><path class="ldxs-ebdf"/><path class="ege_vlbjp"/></g>`,
		"fallback": "iconmind:beam-search-outline-thin",
	});
}

export default Component;
