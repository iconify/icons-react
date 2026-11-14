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
		"content": `<style>.ods-c5btg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M18.5 21.5c1-6.5.5-13-3.5-17l-.5-2l-2 2c-3 1.5-6 5.5-8 9.5c-.5 1.5 1 3 2.5 2.5l4-2c1 1.5 1.5 4 .5 7ZM13 9h.01");
}
</style><path class="ods-c5btg"/>`,
		"fallback": "uix-sharp:equestrian-centre",
	});
}

export default Component;
