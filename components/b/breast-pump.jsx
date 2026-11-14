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
		"content": `<style>.q3d69kbeh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 11.5h8v10H6ZM7 9h6v2.5H7Zm1.5 0q-2.25-2.25-6-2.25V2.5c3.75 0 7.25 2.25 9.25 6.5M14 14q4.5 0 6 3v4.5");
}
</style><path class="q3d69kbeh"/>`,
		"fallback": "uix-sharp:breast-pump",
	});
}

export default Component;
