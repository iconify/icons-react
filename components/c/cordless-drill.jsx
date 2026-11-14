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
		"content": `<style>.c0f2705vc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3.5h13v7H3ZM16 5h2.5v4H16Zm2.5 2h3m-15 3.5L6 16m5-5.5l-.5 5.5m-7 0h10v5h-10Z");
}
</style><path class="c0f2705vc"/>`,
		"fallback": "uix-sharp:cordless-drill",
	});
}

export default Component;
