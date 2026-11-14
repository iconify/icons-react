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
		"content": `<style>.mm_5rs3ck {
  d: path("M7.5 11.75a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wqiqx0bdh {
  d: path("m9 21l-5.5-9l2-6.5h7l2 6.5ZM5.5 5.5v-3h7v3m5.25 6s2.5 3.25 2.5 6a2.5 2.5 0 0 1-5 0c0-2.75 2.5-6 2.5-6ZM9 21v-7.75");
}
</style><g class="ulnmmdpxh"><path class="wqiqx0bdh"/><path class="mm_5rs3ck"/></g>`,
		"fallback": "uix-sharp:dip-pen",
	});
}

export default Component;
