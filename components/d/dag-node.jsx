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
		"content": `<style>.kxpckpb8o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 7.5H16v9H7.5Zm-5 4.5h5M16 9.5h2.25l3.25-5m-5.5 10h2.25l3.25 5");
}
</style><path class="kxpckpb8o"/>`,
		"fallback": "uix-sharp:dag-node",
	});
}

export default Component;
