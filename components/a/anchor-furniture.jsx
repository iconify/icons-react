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
		"content": `<style>.o8teg4-nw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 2.5v19M9 6h11.5v15.5H9ZM3.5 4L9 8.5M14.75 6v15.5m-2.75-8h.01m5.49 0h.01");
}
</style><path class="o8teg4-nw"/>`,
		"fallback": "uix-sharp:anchor-furniture",
	});
}

export default Component;
