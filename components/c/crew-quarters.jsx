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
		"content": `<style>.wxxemtwbv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 3v18m17-18v18M3.5 8.5h17m-17 7h17M6 5.5h4v3H6Zm0 7h4v3H6Zm9.5-4V21m0-9h5m-5 6.5h5");
}
</style><path class="wxxemtwbv"/>`,
		"fallback": "uix-sharp:crew-quarters",
	});
}

export default Component;
