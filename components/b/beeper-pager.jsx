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
		"content": `<style>.egdh_n1ye {
  d: path("M6 10h12v6H6Zm2.5 3H13");
}

.pnfy28b3y {
  d: path("M3 7h18v13H3Zm14.5-3.5V7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="pnfy28b3y"/><path class="egdh_n1ye"/></g>`,
		"fallback": "uix-sharp:beeper-pager",
	});
}

export default Component;
