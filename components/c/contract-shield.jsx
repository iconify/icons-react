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
		"content": `<style>.e_gu3wjxn {
  d: path("M12.671 21.5H3.5v-19H13l5 5v3.829M6.5 9h5m-5 4H13m-6.5 4h4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zbh3q6bqy {
  d: path("m18 14.25l3.5 1.25V18c0 2-1.5 3.25-3.5 4c-2-.75-3.5-2-3.5-4v-2.5Z");
}
</style><g class="ulnmmdpxh"><path class="e_gu3wjxn"/><path class="zbh3q6bqy"/></g>`,
		"fallback": "uix-sharp:contract-shield",
	});
}

export default Component;
