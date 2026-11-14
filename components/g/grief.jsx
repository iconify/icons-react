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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uw2efubnl {
  d: path("M14 6.75a1.5 1.5 0 0 1 3 0a1.5 1.5 0 0 1 1.5 2.5a1.5 1.5 0 0 1-1.5 2.5a1.5 1.5 0 0 1-3 0a1.5 1.5 0 0 1-1.5-2.5a1.5 1.5 0 0 1 1.5-2.5ZM7 16c-2.5 0-4-1.5-4-3.5c2.5 0 4 1.5 4 3.5Zm8.5 0c1.5 2 1.75 2.75 1.75 3.5a1.75 1.75 0 0 1-3.5 0c0-.75.25-1.5 1.75-3.5Z");
}

.youqy3w_k {
  d: path("M7 21.5V11c0-5 2.5-7.5 6-7.5c1.5 0 2.5.75 2.5 1.75");
}
</style><g class="ulnmmdpxh"><path class="youqy3w_k"/><path class="uw2efubnl"/></g>`,
		"fallback": "uix-sharp:grief",
	});
}

export default Component;
