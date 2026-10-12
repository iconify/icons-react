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
		"content": `<style>.ohxdrbbbi {
  d: path("M3.75 2.75h16.5v18.5H3.75z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z-1avnupo {
  d: path("m7.25 10.5l2.25-5l2.25 5M8 9h3m-3.75 5.25h9.5m-9.5 3.25h6");
}
</style><g class="x2cwu0gfd"><path class="ohxdrbbbi"/><path class="z-1avnupo"/></g>`,
		"fallback": "iconoven:glossary-sharp",
	});
}

export default Component;
