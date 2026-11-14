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
		"content": `<style>.iv1dksbnm {
  d: path("M14 4.5a11 11 0 0 1-1 3.75M11.75 10A11 11 0 0 1 9 12.75m-2 1a11 11 0 0 1-2.5.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uu-y5wjts {
  d: path("M3 12V3.5h8.5m5 0H21v17H3V17");
}

.w0pzm1bew {
  d: path("M6.75 12.25L4.5 14.5l2.25 2.25Z");
}
</style><g class="ulnmmdpxh"><path class="uu-y5wjts"/><path class="iv1dksbnm"/><path class="w0pzm1bew"/></g>`,
		"fallback": "uix-sharp:circulation-path",
	});
}

export default Component;
