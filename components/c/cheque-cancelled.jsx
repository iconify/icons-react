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
		"content": `<style>.qs0b-ubqf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.6 18.5H2.5v-13h19v7.1m-19-3.1h19M6 9.5h5m-5 5h3.5m6 1l5 5m0-5l-5 5");
}
</style><path class="qs0b-ubqf"/>`,
		"fallback": "uix-sharp:cheque-cancelled",
	});
}

export default Component;
