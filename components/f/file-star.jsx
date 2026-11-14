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
		"content": `<style>.tr68jcczw {
  d: path("M13.5 2.5v4a2 2 0 0 0 2 2h4M12 10.75l1.029 2.334l2.537.257l-1.902 1.7l.54 2.493L12 16.25l-2.204 1.284l.54-2.493l-1.902-1.7l2.537-.257Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uwivq1yig {
  d: path("M7 2.5h6.5l6 6V19a2.5 2.5 0 0 1-2.5 2.5H7A2.5 2.5 0 0 1 4.5 19V5A2.5 2.5 0 0 1 7 2.5Z");
}
</style><g class="ulnmmdpxh"><path class="uwivq1yig"/><path class="tr68jcczw"/></g>`,
		"fallback": "uix-sharp:file-star",
	});
}

export default Component;
