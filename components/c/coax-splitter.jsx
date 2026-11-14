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
		"content": `<style>.bb4ocpb9x {
  d: path("M2.5 12h6m0 0a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0Z");
}

.jii-93bkx {
  d: path("M13.75 10.75L16.5 6.5h5m-7.75 6.75l2.75 4.25h5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="bb4ocpb9x"/><path class="jii-93bkx"/></g>`,
		"fallback": "uix-sharp:coax-splitter",
	});
}

export default Component;
