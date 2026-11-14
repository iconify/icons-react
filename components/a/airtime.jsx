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
		"content": `<style>.d_jf1w_ih {
  d: path("M12.2 21.5H3.5v-19h12v9.2m-8-5.95h4M14 18a4 4 0 1 0 8 0a4 4 0 1 0-8 0Z");
}

.duporv-yi {
  d: path("M18.75 17c-.25-.5-.5-.5-.75-.5q-.75 0-.75.75c0 .5 1.5.5 1.5 1.5q0 .75-.75.75c-.5 0-.75-.25-.75-.5m.75-3.25v.75m0 3v.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="d_jf1w_ih"/><path class="duporv-yi"/></g>`,
		"fallback": "uix-sharp:airtime",
	});
}

export default Component;
