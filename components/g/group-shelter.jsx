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
		"content": `<style>.q1-ltznca {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 9L12 3l9.5 6Zm3 0v12m13-12v12m-10-5h7m-5.75 0v4.5m4.5-4.5v4.5");
}
</style><path class="q1-ltznca"/>`,
		"fallback": "uix-sharp:group-shelter",
	});
}

export default Component;
