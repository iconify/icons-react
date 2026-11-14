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
		"content": `<style>.bshpkrsiw {
  d: path("m16.95 3.515l3.535 3.535a1.5 1.5 0 0 1 0 2.122l-3.889 3.889a1.5 1.5 0 0 1-2.121 0l-3.536-3.536a1.5 1.5 0 0 1 0-2.121l3.889-3.889a1.5 1.5 0 0 1 2.122 0Zm-7.425 7.424l3.536 3.536a1.5 1.5 0 0 1 0 2.121l-3.889 3.889a1.5 1.5 0 0 1-2.122 0L3.515 16.95a1.5 1.5 0 0 1 0-2.122l3.889-3.889a1.5 1.5 0 0 1 2.121 0Z");
}

.ifchambdd {
  d: path("m13.768 8.111l2.121 2.121l-5.657 5.657l-2.121-2.121Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="bshpkrsiw"/><path class="ifchambdd"/></g>`,
		"fallback": "uix-sharp:chain-links",
	});
}

export default Component;
