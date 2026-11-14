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
		"content": `<style>.hes_-lb4x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.4 21.5H4.5v-19h15v9.9m-11-9.9v19m3-14.5h4m-.25 8.25h.01m2.74 0h3.25m-6 2.75h.01M18 18h3.25m-6 2.75h.01m2.74 0h3.25");
}
</style><path class="hes_-lb4x"/>`,
		"fallback": "uix-sharp:account-list",
	});
}

export default Component;
