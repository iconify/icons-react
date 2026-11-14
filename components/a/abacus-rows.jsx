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
		"content": `<style>.ja2bct7jj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 3v18M20 3v18M7 6.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm2.5 0a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0ZM12 12a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm2.5 0a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm-5 5.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm2.5 0a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm-8-11h16M4 12h16M4 17.5h16");
}
</style><path class="ja2bct7jj"/>`,
		"fallback": "uix-sharp:abacus-rows",
	});
}

export default Component;
