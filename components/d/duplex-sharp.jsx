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
		"content": `<style>.m9dwqpbhx {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 20.35v-10.1l.56-.7L6.82 5.2l.56-.7l.61.66l3.4 3.68l.61.66l.61-.66l3.41-3.68l.61-.66l.56.7l3.5 4.35l.56.7v11H2.75zM12 11.5v9.75");
}

.rfbtt9bff {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7.38 11.5h.01m9.24 0h.01");
}

.tqr73-n6o {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.75 21.25v-4.5h2.5v4.5m5.5 0v-4.5h2.5v4.5");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="m9dwqpbhx"/><path class="rfbtt9bff"/><path class="tqr73-n6o"/></g>`,
		"fallback": "iconoven:duplex-sharp",
	});
}

export default Component;
