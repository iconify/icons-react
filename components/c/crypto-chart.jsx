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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nr2kwkbiv {
  d: path("M17 15h2a3 3 0 0 1 0 6h-2");
}

.pyzluwbgv {
  d: path("m7 15.5l4-4.5l2.673 2.227m1.021-.547L19.5 7M14 18a3 3 0 1 0 6 0a3 3 0 1 0-6 0");
}

.up54bibqb {
  d: path("M3.5 3.5v17h8.3");
}
</style><g class="hntgybcog"><path class="up54bibqb"/><path class="pyzluwbgv"/><path class="nr2kwkbiv"/></g>`,
		"fallback": "uix:crypto-chart",
	});
}

export default Component;
