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
		"content": `<style>.adw4uz8oa {
  d: path("M3 9h8v8.8m0 .4v2.3m0-7h8M14.75 18l2 2L21 15.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xe7-y6b0a {
  d: path("M13.3 20.5H3v-18h16v11.3");
}
</style><g class="ulnmmdpxh"><path class="xe7-y6b0a"/><path class="adw4uz8oa"/></g>`,
		"fallback": "uix-sharp:approved-plan",
	});
}

export default Component;
