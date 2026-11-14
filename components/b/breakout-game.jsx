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
		"content": `<style>.l28kzobfk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3h8v3.5H3Zm10 0h8v3.5h-8ZM8 9.25h8v3.5H8ZM17.5 16a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0ZM5 20.5h8");
}
</style><path class="l28kzobfk"/>`,
		"fallback": "uix-sharp:breakout-game",
	});
}

export default Component;
