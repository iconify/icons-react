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

.unmg90b_r {
  d: path("M8.5 9.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Zm3.5 0l2-1.75M8 17.5v4m4-4v4m4-4v4");
}

.zkrx49_lh {
  d: path("M4 2.5h16v15H4Z");
}
</style><g class="ulnmmdpxh"><path class="zkrx49_lh"/><path class="unmg90b_r"/></g>`,
		"fallback": "uix-sharp:heat-interface-unit",
	});
}

export default Component;
