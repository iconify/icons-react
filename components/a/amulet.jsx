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
		"content": `<style>.cn8c_nbbk {
  d: path("M5.75 15.25a6.25 6.25 0 1 0 12.5 0a6.25 6.25 0 1 0-12.5 0Z");
}

.j71qc9d-e {
  d: path("m12 12l2.75 3.25L12 18.5l-2.75-3.25Z");
}

.sdrf9q9_y {
  d: path("M6 2.5C6 6 9 9 12 9s6-3 6-6.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="sdrf9q9_y"/><path class="cn8c_nbbk"/><path class="j71qc9d-e"/></g>`,
		"fallback": "uix-sharp:amulet",
	});
}

export default Component;
