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
		"content": `<style>.oi49_x1tj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 3h10v15H7ZM5.5 3h13m-14 15h15v3.5h-15ZM9.75 7h4.5m-4.5 4.5h2.75");
}
</style><path class="oi49_x1tj"/>`,
		"fallback": "uix-sharp:booth-banner",
	});
}

export default Component;
