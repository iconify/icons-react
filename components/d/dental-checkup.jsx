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
		"content": `<style>.ignhhxb1k {
  d: path("M10 7.5a5 5 0 1 0 10 0a5 5 0 1 0-10 0Zm1.5 3.5l-8 8");
}

.ij7cb2b5u {
  d: path("M12.75 7.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm2 10.5l2 2L21 15.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ignhhxb1k"/><path class="ij7cb2b5u"/></g>`,
		"fallback": "uix-sharp:dental-checkup",
	});
}

export default Component;
