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
		"content": `<style>.gbxsp6p4c {
  d: path("M4.5 2.5h9l5 5V17h-14Zm2 14.5v4.5H13V17");
}

.nlp70zbiv {
  d: path("M13.5 2.5v5h5M8 10.5h7m-7 3.25h4.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="gbxsp6p4c"/><path class="nlp70zbiv"/></g>`,
		"fallback": "uix-sharp:addendum",
	});
}

export default Component;
