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
		"content": `<style>.gzvfg-bfy {
  d: path("M3.5 4.5h17v17h-17Zm4.5-2V6m8-3.5V6M3.5 8h17");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zfw37gb2p {
  d: path("M10 12.75a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM7 21.5c0-2.5 2.25-4 5-4s5 1.5 5 4");
}
</style><g class="ulnmmdpxh"><path class="gzvfg-bfy"/><path class="zfw37gb2p"/></g>`,
		"fallback": "uix-sharp:bank-appointment",
	});
}

export default Component;
