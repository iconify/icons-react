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
		"content": `<style>.amfjlc-na {
  d: path("M2.5 4v17m19-17v17M2.5 5q9.5 10 19 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ymk_5xbop {
  d: path("M5 9.75a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m5.5 1.75a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0M16 9.75a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}
</style><g class="hntgybcog"><path class="amfjlc-na"/><path class="ymk_5xbop"/></g>`,
		"fallback": "uix:camp-string-lights",
	});
}

export default Component;
