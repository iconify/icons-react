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
		"content": `<style>.h_tsn8bxt {
  cx: 12px;
  cy: 12px;
  r: 2px;
}

.h9hk9bc_u {
  d: path("M11.38 20.42L4.4 8.33l-.63-1.08h16.46l-.63 1.08l-6.97 12.09L12 21.5z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xgzkepbtt {
  d: path("m12.63 3.58l6.97 12.09l.63 1.08H3.77l.63-1.08l6.98-12.09L12 2.5z");
}
</style><g class="x2cwu0gfd"><path class="xgzkepbtt"/><path class="h9hk9bc_u"/><circle class="h_tsn8bxt"/></g>`,
		"fallback": "iconoven:hexagram-sharp",
	});
}

export default Component;
