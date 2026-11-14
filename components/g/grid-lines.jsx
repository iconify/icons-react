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
		"content": `<style>.geroz1ptg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3h18v18H3Zm4.5 0v18M12 3v18m4.5-18v18M3 7.5h18M3 12h18M3 16.5h18");
}
</style><path class="geroz1ptg"/>`,
		"fallback": "uix-sharp:grid-lines",
	});
}

export default Component;
