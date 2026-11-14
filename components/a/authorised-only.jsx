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
		"content": `<style>.ljzrlpbff {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 6.75a4 4 0 1 0 8 0a4 4 0 1 0-8 0ZM3 21c0-4.25 3.25-7.5 7.5-7.5c1.37 0 2.636.338 3.722.938M15 17.5h6v4h-6Zm1.5 0v-1a1.5 1.5 0 0 1 3 0v1");
}
</style><path class="ljzrlpbff"/>`,
		"fallback": "uix-sharp:authorised-only",
	});
}

export default Component;
