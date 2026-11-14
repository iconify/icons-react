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
		"content": `<style>.kxz67hdcx {
  d: path("M2 3.5h8m-4 0V14a4 4 0 0 0 4 4h6");
}

.qgew_5bdd {
  d: path("M15.5 15.5H18v5h-2.5Z");
}

.rg4d6vb5u {
  fill: currentColor;
  d: path("m18 15.5l3 2.5l-3 2.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="kxz67hdcx"/><path class="qgew_5bdd"/><path class="rg4d6vb5u"/></g>`,
		"fallback": "uix-sharp:directional-drilling",
	});
}

export default Component;
