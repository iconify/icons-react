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
		"content": `<style>.bvg8psmts {
  d: path("M2.5 9.5c2.25-3.5 5-5 7.5-5s5.25 1.5 7.5 5c-2.25 3.5-5 5-7.5 5s-5.25-1.5-7.5-5Z");
}

.ol2p4-kzg {
  d: path("M7.5 9.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm2.5 0h.01M18 14c1.75 2 3 3.5 3 5c0 1.6-1.4 2.75-3 2.75S15 20.6 15 19c0-1.5 1.25-3 3-5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="bvg8psmts"/><path class="ol2p4-kzg"/></g>`,
		"fallback": "uix-sharp:dry-eye",
	});
}

export default Component;
