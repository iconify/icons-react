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
		"content": `<style>.ij9yyea4s {
  d: path("m9 8.5l-3 3l3 3m3.5-6l3 3l-2.162 2.162m4.912 1.088L21.5 16v2.25c0 1.75-1.25 2.75-3.25 3.5C16.25 21 15 20 15 18.25V16Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zh1auorck {
  d: path("M12.6 20.5H2.5v-17h19V13");
}
</style><g class="ulnmmdpxh"><path class="zh1auorck"/><path class="ij9yyea4s"/></g>`,
		"fallback": "uix-sharp:code-review-security",
	});
}

export default Component;
