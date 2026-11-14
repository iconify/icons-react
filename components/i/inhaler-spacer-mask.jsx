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
		"content": `<style>.bm2k_nb5b {
  d: path("M16 14.25a2.75 5 0 1 0 5.5 0a2.75 5 0 1 0-5.5 0ZM4.5 3H9v8H4.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wuvzo_4jj {
  d: path("M16.75 11H4.5a2 2 0 0 0-2 2v2.5a2 2 0 0 0 2 2h12.25");
}
</style><g class="ulnmmdpxh"><path class="wuvzo_4jj"/><path class="bm2k_nb5b"/></g>`,
		"fallback": "uix-sharp:inhaler-spacer-mask",
	});
}

export default Component;
