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
		"content": `<style>.e1aumacfl {
  d: path("M3.5 3.5h17V14h-17Zm-1 12h19v5h-19Z");
}

.ou2_qzb3l {
  d: path("M6.5 6.5h7V11h-7ZM14 18h4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="e1aumacfl"/><path class="ou2_qzb3l"/></g>`,
		"fallback": "uix-sharp:computer-old",
	});
}

export default Component;
