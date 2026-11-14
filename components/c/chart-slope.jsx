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
		"content": `<style>.dlxfz6qro {
  fill: currentColor;
  d: path("M2.75 6a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm16-2.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm-16 8.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm16 5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm-16 1a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm16 2.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Z");
}

.sj_rcrb6c {
  d: path("M4 2.5v19m16-19v19M4 6l16-2.5M4 12l16 5M4 18l16 2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="sj_rcrb6c"/><path class="dlxfz6qro"/></g>`,
		"fallback": "uix-sharp:chart-slope",
	});
}

export default Component;
