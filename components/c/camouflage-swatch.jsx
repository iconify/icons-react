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
		"content": `<style>.jxemsp-ct {
  d: path("M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z");
}

.te-7qebpj {
  d: path("M3 10c3-1 4.5 2 7.5.5c2.5-1.25 1.5-5 4-7.5M9 21c1-3 4.5-2 6-4.5s3.5-1 6-3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="jxemsp-ct"/><path class="te-7qebpj"/></g>`,
		"fallback": "uix-sharp:camouflage-swatch",
	});
}

export default Component;
