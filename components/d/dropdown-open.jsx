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
		"content": `<style>.bphvhnb4p {
  d: path("m12.75 13.5l3-3l3 3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vzjd6hbbu {
  d: path("M2.5 6h19v12h-19Zm3 6h4.25");
}
</style><g class="ulnmmdpxh"><path class="vzjd6hbbu"/><path class="bphvhnb4p"/></g>`,
		"fallback": "uix-sharp:dropdown-open",
	});
}

export default Component;
