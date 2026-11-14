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
		"content": `<style>.l42630oed {
  d: path("M3 21V4h18v17");
}

.qvrfggftt {
  fill: currentColor;
  d: path("M14.75 19.25a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zl4fe1pft {
  d: path("m3 9l4.5-5L12 9l4.5-5L21 9H3m9.737 2.788l2.475 2.475l-4.949 4.949l-2.475-2.475ZM9 18l-3 3");
}
</style><g class="ulnmmdpxh"><path class="l42630oed"/><path class="zl4fe1pft"/><path class="qvrfggftt"/></g>`,
		"fallback": "uix-sharp:cricket-net-practice",
	});
}

export default Component;
