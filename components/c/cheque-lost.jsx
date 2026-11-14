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
		"content": `<style>.kvf4_8_lo {
  d: path("M16.5 16.5c0-.9.7-1.5 1.5-1.5s1.5.6 1.5 1.5c0 1-1.5 1.1-1.5 2.25M18 21h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xmvwshbvt {
  d: path("M13.7 18.5H2.5v-13h19V14m-19-4.5h19M6 9.5h5m-5 5h3.5");
}
</style><g class="ulnmmdpxh"><path class="xmvwshbvt"/><path class="kvf4_8_lo"/></g>`,
		"fallback": "uix-sharp:cheque-lost",
	});
}

export default Component;
