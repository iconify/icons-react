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
		"content": `<style>.m_f9v-bic {
  d: path("M11.25 7.75a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vsgvagbop {
  d: path("M4 4.5h16l-8 8Zm8 8v8m-4 0h8M17.5 2l-4.25 4.75");
}
</style><g class="ulnmmdpxh"><path class="vsgvagbop"/><path class="m_f9v-bic"/></g>`,
		"fallback": "uix-sharp:cocktail-party",
	});
}

export default Component;
