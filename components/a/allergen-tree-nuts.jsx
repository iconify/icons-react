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
		"content": `<style>.p4_g-60gr {
  d: path("M7.75 10.5C7.75 8.25 9.6 7 12 7s4.25 1.25 4.25 3.5Zm1 0V12c0 2.5 1.5 4.5 3.25 5.25c1.75-.75 3.25-2.75 3.25-5.25v-1.5M12 7l.5-1.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zdgu3ybil {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0Z");
}
</style><g class="ulnmmdpxh"><path class="zdgu3ybil"/><path class="p4_g-60gr"/></g>`,
		"fallback": "uix-sharp:allergen-tree-nuts",
	});
}

export default Component;
