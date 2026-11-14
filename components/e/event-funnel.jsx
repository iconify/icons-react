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
		"content": `<style>.jj92h7b1q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 7h16l-6 7v6l-4-2v-4Zm3-3.5h.01m4.99 0h.01m4.99 0h.01");
}
</style><path class="jj92h7b1q"/>`,
		"fallback": "uix-sharp:event-funnel",
	});
}

export default Component;
