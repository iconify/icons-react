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
		"content": `<style>.ckjkddbah {
  d: path("M7.9 4H21v13.1M16.1 20H3V6.9m0 9.6l4.738-4.738");
}

.ffhmct_qe {
  d: path("M14 9a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0ZM3.5 3.5l17 17");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ckjkddbah"/><path class="ffhmct_qe"/></g>`,
		"fallback": "uix-sharp:image-off",
	});
}

export default Component;
