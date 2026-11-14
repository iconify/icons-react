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
		"content": `<style>.p6ls_g28y {
  d: path("M12.5 9a3 3 0 0 1 6 0c0 1.5-1.25 2-2.5 2.75m-8.75 1.431a3.5 3.5 0 0 1 0-5.362m-2.7 7.631a7 7 0 0 1 0-9.9");
}

.r47slwtrc {
  d: path("M9.5 9a6 6 0 0 1 12 0c0 3.25-2.5 4.5-3.25 6.75c-.65 2-1.75 4.75-4.5 4.75c-2 0-3.25-1.25-3.75-2.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="r47slwtrc"/><path class="p6ls_g28y"/></g>`,
		"fallback": "uix-sharp:ear-listen",
	});
}

export default Component;
