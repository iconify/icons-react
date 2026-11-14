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
		"content": `<style>.hvexjkbco {
  d: path("M2.25 15.25L4.5 13l2.25 2.25m10.5-4.5L19.5 13l2.25-2.25");
}

.irbudsb2w {
  d: path("M10.5 5.5h-6v15h15v-15h-6m-3-2.5v5m3-3.75v2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="irbudsb2w"/><path class="hvexjkbco"/></g>`,
		"fallback": "uix-sharp:electric-current",
	});
}

export default Component;
