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
		"content": `<style>.qdb9_1bso {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 4.5H6v7H2.5m19-7H18v7h3.5M6 6l4.5-2h3L18 6v4.5l-4.5 3a1.5 1.5 0 0 1-2-1L6 10Zm4 1.75L13.5 10m4.5 5v6m-3-3h6");
}
</style><path class="qdb9_1bso"/>`,
		"fallback": "uix:handshake-plus",
	});
}

export default Component;
