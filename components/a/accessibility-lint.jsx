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
		"content": `<style>.r3bcelbcu {
  d: path("m9 8.5l-2.75 2.75L9 14m6-5.5l2.75 2.75L15 14m-.25 4l2 2L21 15.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zltrxmbxm {
  d: path("M12.3 19.5H2.5v-16h19v8.8m0 6.9v.3h-.3");
}
</style><g class="ulnmmdpxh"><path class="zltrxmbxm"/><path class="r3bcelbcu"/></g>`,
		"fallback": "uix-sharp:accessibility-lint",
	});
}

export default Component;
