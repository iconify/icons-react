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
		"content": `<style>.b1d363-7k {
  d: path("M9.75 8.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0ZM12 16.25v5.25m-2.75-2.75L12 21.5l2.75-2.75");
}

.ljm-k6uze {
  d: path("M2.5 3.5h19v10h-19Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ljm-k6uze"/><path class="b1d363-7k"/></g>`,
		"fallback": "uix-sharp:banknote-download",
	});
}

export default Component;
