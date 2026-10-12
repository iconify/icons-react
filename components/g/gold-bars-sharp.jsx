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
		"content": `<style>.toocmmbst {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3 19.53l1-3.81l.25-.97h5l.25.97l1 3.81l.25.97h-8zm10.5 0l1-3.81l.25-.97h5l.25.97l1 3.81l.25.97h-8zM8 11.28l1-3.81l.25-.97h5.5l.25.97l1 3.81l.25.97h-8.5z");
}
</style><path class="toocmmbst"/>`,
		"fallback": "iconoven:gold-bars-sharp",
	});
}

export default Component;
