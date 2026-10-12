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
		"content": `<style>.bun9_lbtr {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4.11 7.16l11.59-3.1l1.45-.39l.39 1.45l.91 3.38l.39 1.45l-1.45.39l-11.59 3.1l-1.45.39l-.39-1.45L3.05 9l-.39-1.45z");
}

.hw3g_zuuw {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5.75 10.75h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.x-1fftdvz {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m13.5 13.25l1 4.25h6.25m0-3.5v7");
}
</style><g class="ux2u0rbkq"><path class="bun9_lbtr"/><path class="hw3g_zuuw"/><path class="x-1fftdvz"/></g>`,
		"fallback": "iconoven:cctv-monitor-sharp",
	});
}

export default Component;
