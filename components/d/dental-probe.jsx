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
		"content": `<style>.bj6xxw89v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 18.5L9 13l2 2l-5.5 5.5ZM10 14l7-7m0 0l1.75-1.75c2-2-.75-2.75-1.75-1");
}
</style><path class="bj6xxw89v"/>`,
		"fallback": "uix-sharp:dental-probe",
	});
}

export default Component;
