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
		"content": `<style>.ib3gs6bzn {
  d: path("M6 2.5V16a2 2 0 0 0 2 2h13.5");
}

.ocmla0jdf {
  d: path("M9 9h6v6H9Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vu5ir404e {
  d: path("M2.5 6H16a2 2 0 0 1 2 2v13.5");
}
</style><g class="ulnmmdpxh"><path class="ib3gs6bzn"/><path class="vu5ir404e"/><path class="ocmla0jdf"/></g>`,
		"fallback": "uix-sharp:crop-square",
	});
}

export default Component;
