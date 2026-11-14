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
		"content": `<style>.os96kc9og {
  d: path("M4 5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm12 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wnb3aabco {
  d: path("M12 21v-8m0 0c0-3-6-2.5-6-6m6 6c0-3 6-2.5 6-6");
}
</style><g class="ulnmmdpxh"><path class="wnb3aabco"/><path class="os96kc9og"/></g>`,
		"fallback": "uix-sharp:common-ancestor",
	});
}

export default Component;
