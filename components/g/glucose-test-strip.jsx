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
		"content": `<style>.ifvz-kj4u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m1.99 18.475l8.485-8.485l3.535 3.535l-8.485 8.485ZM17.5 2S21 5.5 21 7.5a3.5 3.5 0 0 1-7 0c0-2 3.5-5.5 3.5-5.5ZM8.354 12.111l3.535 3.535");
}
</style><path class="ifvz-kj4u"/>`,
		"fallback": "uix-sharp:glucose-test-strip",
	});
}

export default Component;
