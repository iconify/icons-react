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
		"content": `<style>.u2h2alt7z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.25 17.5a3.75 3.25 0 1 0 7.5 0a3.75 3.25 0 1 0-7.5 0Zm7.5 0V3");
}
</style><path class="u2h2alt7z"/>`,
		"fallback": "uix-sharp:daily-mix",
	});
}

export default Component;
