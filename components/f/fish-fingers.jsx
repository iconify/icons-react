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
		"content": `<style>.gflphzbon {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.205 5.989za1.875 1.875 0 0 1 2.224 1.445l2.339 11.004a1.875 1.875 0 0 1-1.444 2.224A1.875 1.875 0 0 1 5.1 19.217L2.761 8.213a1.875 1.875 0 0 1 1.444-2.224m6.358-1.351za1.875 1.875 0 0 1 2.224 1.444l2.339 11.004a1.875 1.875 0 0 1-1.444 2.224a1.875 1.875 0 0 1-2.224-1.444L9.119 6.862a1.875 1.875 0 0 1 1.444-2.224m6.358-1.352za1.875 1.875 0 0 1 2.224 1.445l2.339 11.004a1.875 1.875 0 0 1-1.444 2.224a1.875 1.875 0 0 1-2.224-1.445L15.477 5.51a1.875 1.875 0 0 1 1.444-2.224");
}
</style><path class="gflphzbon"/>`,
		"fallback": "uix:fish-fingers",
	});
}

export default Component;
