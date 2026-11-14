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
		"content": `<style>.tge2xqzyj {
  d: path("M2.5 2.5h19M6 2.5v6m12-6v6m-15.5 0h19V19h-19ZM7 13.75h9.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xid91tbpa {
  d: path("m13.75 11l2.75 2.75l-2.75 2.75");
}
</style><g class="ulnmmdpxh"><path class="tge2xqzyj"/><path class="xid91tbpa"/></g>`,
		"fallback": "uix-sharp:ceiling-hanging-sign",
	});
}

export default Component;
