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
		"content": `<style>.igzb7mbht {
  fill: currentColor;
  d: path("M2 16V8h1v7h8.5V8H19q1.238 0 2.119.881T22 11v5zm10.5-1H21v-4q0-.825-.587-1.412T19 9h-6.5zm0-6v6zm-4 3.498q.616-.618.616-1.5T8.498 9.5t-1.5-.615t-1.498.617t-.615 1.5t.617 1.498t1.5.616t1.498-.618m-2.29-.708q-.326-.326-.326-.79t.326-.79t.79-.325t.79.326t.326.789t-.326.79t-.79.326t-.79-.326M7 11");
}
</style><path class="igzb7mbht"/>`,
		"fallback": "material-symbols-light:airline-seat-individual-suite-outline",
	});
}

export default Component;
