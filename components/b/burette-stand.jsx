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
		"content": `<style>.f-t-6dbma {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 18h17v3.5h-17ZM8 2.5V18M8 8h7.5m5-2.5h-5v5h5");
}
</style><path class="f-t-6dbma"/>`,
		"fallback": "uix-sharp:burette-stand",
	});
}

export default Component;
