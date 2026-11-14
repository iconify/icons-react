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
		"content": `<style>.iybitnbuk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 3.5v17m-3 0h5.6M4.5 5h11m-11 0l-2 5a2 2 0 0 0 4 0Zm11 0l-2 5a2 2 0 0 0 4 0Zm3.25 10.879L20.871 18a1.5 1.5 0 0 1 0 2.121a1.5 1.5 0 0 1-2.121 0L16.629 18a1.5 1.5 0 0 1 0-2.121a1.5 1.5 0 0 1 2.121 0m-1 3.121l-2.5 2.5");
}
</style><path class="iybitnbuk"/>`,
		"fallback": "uix:arbitration",
	});
}

export default Component;
