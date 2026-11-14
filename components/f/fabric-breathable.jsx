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
		"content": `<style>.iphoevbuu {
  d: path("M6.5 7.75c3-1.5 8 1.5 11 0M6.5 12c3-1.5 8 1.5 11 0m-11 4.25c3-1.5 8 1.5 11 0");
}

.oda4a2bll {
  d: path("M3 3.5h18v17H3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="oda4a2bll"/><path class="iphoevbuu"/></g>`,
		"fallback": "uix-sharp:fabric-breathable",
	});
}

export default Component;
