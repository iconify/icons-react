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
		"content": `<style>.h3zhj1zgh {
  d: path("m4.5 2.5l13 7.5l-13 7.5ZM14 18a4 4 0 1 0 8 0a4 4 0 1 0-8 0Zm0 0h8");
}

.ivzpdhhtj {
  d: path("M15.25 15.25q2.75 2.75 0 5.5m5.5-5.5q-2.75 2.75 0 5.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="h3zhj1zgh"/><path class="ivzpdhhtj"/></g>`,
		"fallback": "uix-sharp:basketball-live",
	});
}

export default Component;
