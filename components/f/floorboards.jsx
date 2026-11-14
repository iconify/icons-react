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
		"content": `<style>.z_n_e_ead {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 4h12l3.5 16h-19Zm4 0L8.75 20M14 4l1.25 16M4 13h5.25m.5-5h4.5m.5 7h5.75");
}
</style><path class="z_n_e_ead"/>`,
		"fallback": "uix-sharp:floorboards",
	});
}

export default Component;
