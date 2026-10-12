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
		"content": `<style>.k33ov6b1d {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m16.37 13.08l-1.24 2.17l-.63 1.08h-5l-.63-1.08l-1.24-2.17L7 12l.63-1.08l1.24-2.17l.63-1.08h5l.63 1.08l1.24 2.17L17 12z");
}

.qopss0bjp {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3 3l3.5 3.5m0-2.75V6.5H3.75M21 3l-3.5 3.5m0-2.75V6.5h2.75M21 21l-3.5-3.5m0 2.75V17.5h2.75M3 21l3.5-3.5m0 2.75V17.5H3.75");
}

.to8m3ibcr {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 12h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="k33ov6b1d"/><path class="to8m3ibcr"/><path class="qopss0bjp"/></g>`,
		"fallback": "iconoven:attack-surface-sharp",
	});
}

export default Component;
