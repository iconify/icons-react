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
		"content": `<style>.cxsbwtbyg {
  d: path("M11.5 6.5h8v11h-8Z");
}

.hde8mfber {
  d: path("M17.25 10.25C17 9.5 16.4 9 15.5 9c-1.05 0-1.75.6-1.75 1.5c0 1.6 3.5.9 3.5 3c0 .9-.75 1.5-1.75 1.5c-.9 0-1.55-.4-1.75-1m1.75-5.5v7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vfrjs7b6k {
  d: path("M2.5 4.5h19v15h-19Zm3 4.5h3m-3 5h3");
}
</style><g class="ulnmmdpxh"><path class="vfrjs7b6k"/><path class="cxsbwtbyg"/><path class="hde8mfber"/></g>`,
		"fallback": "uix-sharp:cheque-amount-figures",
	});
}

export default Component;
