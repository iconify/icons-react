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
		"content": `<style>.hvg78omco {
  d: path("M17.01 8.63a4 2-20 1 1-7.52 2.74a4 2-20 1 1 7.52-2.74ZM2.75 18l5.5-2m-3 5.25l5.5-2");
}

.qfimmvbkh {
  d: path("M20.53 7.35a7.75 4.25-20 1 1-14.56 5.3a7.75 4.25-20 1 1 14.56-5.3Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="qfimmvbkh"/><path class="hvg78omco"/></g>`,
		"fallback": "iconoven:frisbee-sharp",
	});
}

export default Component;
