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
		"content": `<style>.k-_00-bhi {
  d: path("M9 2.5h6V6H9ZM7.5 9.75h3m3-.25L15 11l2.25-2.25m-9.75 5h9m-9 4h9");
}

.ldvft03zi {
  d: path("M4 4h16v17.5H4Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ldvft03zi"/><path class="k-_00-bhi"/></g>`,
		"fallback": "uix-sharp:census-form-check",
	});
}

export default Component;
