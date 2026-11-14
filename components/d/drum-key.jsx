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
		"content": `<style>.vglrvnbrq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3h18v4.5H3Zm9 4.5V15m-3.5 0h7v6.5h-7Z");
}
</style><path class="vglrvnbrq"/>`,
		"fallback": "uix-sharp:drum-key",
	});
}

export default Component;
