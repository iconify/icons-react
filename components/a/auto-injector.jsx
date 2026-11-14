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
		"content": `<style>.uww7zccet {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4.045 15.712l9.192-9.192l4.243 4.243l-9.192 9.192Zm9.546-8.839l3.005-1.237l1.768 1.768l-1.237 3.005Zm-6.718 6.011l4.243 4.243M17.48 6.52l2.298-2.298");
}
</style><path class="uww7zccet"/>`,
		"fallback": "uix-sharp:auto-injector",
	});
}

export default Component;
