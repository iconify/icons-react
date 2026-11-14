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
		"content": `<style>.q7athmesa {
  d: path("M13.5 2.5v4a2 2 0 0 0 2 2h4M9 18.5V16a3 3 0 0 1 3-3h3.5");
}

.u5e583b5t {
  d: path("m13.5 11l2 2l-2 2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uwivq1yig {
  d: path("M7 2.5h6.5l6 6V19a2.5 2.5 0 0 1-2.5 2.5H7A2.5 2.5 0 0 1 4.5 19V5A2.5 2.5 0 0 1 7 2.5Z");
}
</style><g class="ulnmmdpxh"><path class="uwivq1yig"/><path class="q7athmesa"/><path class="u5e583b5t"/></g>`,
		"fallback": "uix-sharp:file-symlink",
	});
}

export default Component;
