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
		"content": `<style>.mevpu5b8q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M19.3 13.5H4.5V3h15v10.3m-17 .2h16.8M4.5 6.75h15M12 3v3.75M14.75 18l2 2L21 15.75");
}
</style><path class="mevpu5b8q"/>`,
		"fallback": "uix-sharp:final-assembly",
	});
}

export default Component;
