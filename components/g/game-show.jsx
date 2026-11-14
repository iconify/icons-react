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
		"content": `<style>.oz36g7rzg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 21.5V15h15v6.5M12 2l1.5 3.5l3.75.25l-2.75 2.5l.75 3.75L12 10l-3.25 2l.75-3.75l-2.75-2.5l3.75-.25ZM9 18.25h6");
}
</style><path class="oz36g7rzg"/>`,
		"fallback": "uix-sharp:game-show",
	});
}

export default Component;
