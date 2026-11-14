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
		"content": `<style>.bnjnom5xi {
  d: path("M9 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}

.j_psw1y4g {
  d: path("M3 3h18v18H3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w8op26bro {
  d: path("M5.5 15.75a7.5 2.5-30 1 1 13-7.5a7.5 2.5-30 1 1-13 7.5");
}
</style><g class="ulnmmdpxh"><path class="j_psw1y4g"/><path class="bnjnom5xi"/><path class="w8op26bro"/></g>`,
		"fallback": "uix-sharp:element-copernicium",
	});
}

export default Component;
