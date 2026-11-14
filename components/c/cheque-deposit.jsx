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
		"content": `<style>.je-9dhb6l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.6 18.5H2.5v-13h19v10.1m-19-6.1h19M6 9.5h5m-5 5h3.5m8.5.5v6m-2.5-2.5L18 21l2.5-2.5");
}
</style><path class="je-9dhb6l"/>`,
		"fallback": "uix-sharp:cheque-deposit",
	});
}

export default Component;
