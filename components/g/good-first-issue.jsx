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
		"content": `<style>.i6x-lthtz {
  d: path("M11.5 19.5H3v-17h13v4.2M6.5 7h6m-6 4h3");
}

.r2ccl4bhy {
  d: path("m16.75 12.25l1.029 2.584l2.775.18l-2.14 1.777l.687 2.695L16.75 18l-2.351 1.486l.687-2.695l-2.14-1.777l2.775-.18Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="i6x-lthtz"/><path class="r2ccl4bhy"/></g>`,
		"fallback": "uix-sharp:good-first-issue",
	});
}

export default Component;
