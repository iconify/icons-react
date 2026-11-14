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
		"content": `<style>.gxy00ebpt {
  d: path("M9.5 2.5h5v19h-5Z");
}

.i9cd8uk7c {
  d: path("M2.5 9.5h19v5h-19Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="gxy00ebpt"/><path class="i9cd8uk7c"/></g>`,
		"fallback": "uix-sharp:cross-greek",
	});
}

export default Component;
