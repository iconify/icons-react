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
		"content": `<style>.asn1z3bat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.75 2.5h4.5v12h-4.5Zm2.25 12V19m-3.5-1.75h7M9.75 6.5H12m-2.25 4H12m0 11.25h.01");
}
</style><path class="asn1z3bat"/>`,
		"fallback": "uix-sharp:burette",
	});
}

export default Component;
