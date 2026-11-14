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
		"content": `<style>.mk1qlfbwg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 6a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0Zm9 0a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0Zm-4.5 7a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0ZM2.5 19.5h19M8 16.75l-1.5-2m9.5 2l1.5-2");
}
</style><path class="mk1qlfbwg"/>`,
		"fallback": "uix-sharp:groundbait",
	});
}

export default Component;
