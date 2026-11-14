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
		"content": `<style>.tqrv0tbko {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 18a3.5 2.5 0 1 0 7 0a3.5 2.5 0 1 0-7 0Zm7 0V3.5M18 18h.01");
}
</style><path class="tqrv0tbko"/>`,
		"fallback": "uix-sharp:dotted-note",
	});
}

export default Component;
