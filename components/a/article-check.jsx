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
		"content": `<style>.e9fltbcec {
  d: path("m14.75 18l2 2L21 15.75");
}

.mtfyn2bso {
  d: path("M12.8 20H3V2h14v13.8M6.5 6.5h7m-7 4h7m-7 4H10");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="mtfyn2bso"/><path class="e9fltbcec"/></g>`,
		"fallback": "uix-sharp:article-check",
	});
}

export default Component;
