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
		"content": `<style>.lzshsnesk {
  d: path("M2.5 14.5a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0Zm12 1.25H12V10.5a4.75 4.75 0 0 1 9.5 0v5.25H19");
}

.qi1s-mbgv {
  d: path("M14.5 15.75a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0ZM5.75 14.5L12 12.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="lzshsnesk"/><path class="qi1s-mbgv"/></g>`,
		"fallback": "uix-sharp:bike-trailer",
	});
}

export default Component;
