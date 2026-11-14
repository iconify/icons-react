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
		"content": `<style>.vuh5vgnbw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 9.5h7m-7 5h7m0-9H17v13H9.5ZM17 12h4.5m-8.25-6.5v13");
}
</style><path class="vuh5vgnbw"/>`,
		"fallback": "uix-sharp:coax-connector",
	});
}

export default Component;
