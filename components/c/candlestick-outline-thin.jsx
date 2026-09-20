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
		"content": `<style>.dj67tfbum {
  d: path("M16.5 2v3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i6ie1cbih {
  d: path("M13 7a2 2 0 0 1 2 -2h3a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-3a2 2 0 0 1 -2 -2Z");
}

.kfbowc6fy {
  d: path("M5.5 16v5");
}

.upcwfhbgi {
  d: path("M5.5 3v5");
}

.vuw9fh7pu {
  d: path("M16.5 15v5");
}

.xrrcnmb6x {
  d: path("M2 10a2 2 0 0 1 2 -2h3a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}
</style><g class="hntgybcog"><path class="upcwfhbgi"/><path class="xrrcnmb6x"/><path class="kfbowc6fy"/><path class="dj67tfbum"/><path class="i6ie1cbih"/><path class="vuw9fh7pu"/></g>`,
		"fallback": "iconmind:candlestick-outline-thin",
	});
}

export default Component;
