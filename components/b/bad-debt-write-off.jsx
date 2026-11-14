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
		"content": `<style>.cryc_rb_w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m11.82 20.76l-.32.24l-2-1.5l-2 1.5l-2-1.5l-2 1.5V2.5h12v8.7M6.5 7h6m-6 4h6m1.25 6.5a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0ZM15 15l5 5");
}
</style><path class="cryc_rb_w"/>`,
		"fallback": "uix-sharp:bad-debt-write-off",
	});
}

export default Component;
