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
		"content": `<style>.ik491dznn {
  d: path("M10.75 11a1.25 2.25 0 1 0 2.5 0a1.25 2.25 0 1 0-2.5 0Z");
}

.sj7g1vbpd {
  d: path("m12 8.5l1.25-2.25l.75 2.5c2.25-1.5 5.25-1.75 7.25-.25l-1.63 1.222L20 12l-2.155-1.293L16.5 12.5L15 11l-1 2l-.714 1.786L12 16.5l-1.286-1.714L10 13l-1-2l-1.5 1.5l-1.345-1.793L4 12l.38-2.278L2.75 8.5c2-1.5 5-1.25 7.25.25l.75-2.5Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="sj7g1vbpd"/><path class="ik491dznn"/></g>`,
		"fallback": "iconoven:bat-sharp",
	});
}

export default Component;
