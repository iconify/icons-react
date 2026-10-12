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
		"content": `<style>.ctvl36bls {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.25 6.5h14l-.45.89l-2.6 5.22l-.45.89h-15l.45-.89l2.6-5.22l.45-.89zm3.25 1.25l-2.25 4.5m7.25-4.5l-2.25 4.5m-7.5 1.25v6.75m10-6.75v6.75");
}
</style><path class="ctvl36bls"/>`,
		"fallback": "iconoven:charpai-sharp",
	});
}

export default Component;
