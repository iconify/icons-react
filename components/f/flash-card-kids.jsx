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
		"content": `<style>.nfs43wb_z {
  d: path("m12 5.5l3.5 6h-7Zm0 6v3m-3 3.25h6");
}

.q0f-lgkcm {
  d: path("M5 2.5h14v19H5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="q0f-lgkcm"/><path class="nfs43wb_z"/></g>`,
		"fallback": "uix-sharp:flash-card-kids",
	});
}

export default Component;
