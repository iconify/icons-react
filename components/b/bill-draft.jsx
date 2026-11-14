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
		"content": `<style>.xu7bd1juj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 14.3V4h8.1M18 9.9v11.6H4v-1.9m2.5-4.1L8 12L18 2l2 2l-10 10ZM8 12l2 2");
}
</style><path class="xu7bd1juj"/>`,
		"fallback": "uix-sharp:bill-draft",
	});
}

export default Component;
