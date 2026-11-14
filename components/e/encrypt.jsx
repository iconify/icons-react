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
		"content": `<style>.m_-065tgs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 11h11v9.5h-11Zm2.75 0V8.5a2.75 2.75 0 0 1 5.5 0V11m4.75 4.75h6m-2.25-2.25l2.25 2.25L19.25 18");
}
</style><path class="m_-065tgs"/>`,
		"fallback": "uix-sharp:encrypt",
	});
}

export default Component;
