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
		"content": `<style>.tk48mnvsy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 2.5v19m16-19v19M7 4h10v8.5H7Zm0 4.25h10M7 17q2.5-2 5 0t5 0");
}
</style><path class="tk48mnvsy"/>`,
		"fallback": "uix-sharp:flood-gate",
	});
}

export default Component;
