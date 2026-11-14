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
		"content": `<style>.xujbo5oql {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.25 13.5v-8a3 3 0 0 1 6 0v8a4.5 4.5 0 1 1-6 0Zm3-6.5v9.75m8.5-11.25L20 8.75a2.75 2.75 0 1 1-4.5 0Z");
}
</style><path class="xujbo5oql"/>`,
		"fallback": "uix-sharp:feels-like-hot",
	});
}

export default Component;
