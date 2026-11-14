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
		"content": `<style>.mxu4iwysg {
  d: path("M3.5 3v18m3-16H17v5H6.5Z");
}

.nii_ngb3a {
  fill: currentColor;
  d: path("M10.5 13.5H21v5H10.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="mxu4iwysg"/><path class="nii_ngb3a"/></g>`,
		"fallback": "uix-sharp:gantt-baseline",
	});
}

export default Component;
