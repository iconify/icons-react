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
		"content": `<style>.gzwq41u-n {
  d: path("M2.5 20.5h9c1 0 1.75-.25 2.5-.75l5.75-4.25a1.5 1.5 0 0 0-2-2.25l-4 2.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.o843w809a {
  d: path("M2.5 13.5H5c1.5 0 3 .75 4 1.75h3.5a1.25 1.25 0 0 1 0 2.5H9.25");
}

.sj2fh8bew {
  fill: currentColor;
  d: path("M11.5 2.5c2 2.25 3.25 3.75 3.25 5.25c0 1.75-1.5 3-3.25 3s-3.25-1.25-3.25-3c0-1.5 1.25-3 3.25-5.25");
}
</style><g class="hntgybcog"><path class="o843w809a"/><path class="gzwq41u-n"/><path class="sj2fh8bew"/></g>`,
		"fallback": "uix:blood-donation",
	});
}

export default Component;
