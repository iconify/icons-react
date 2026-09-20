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
		"content": `<style>.xem9l2b9x {
  fill: currentColor;
  d: path("M10.375 15v-4.5h-2.25V9h6v1.5h-2.25V15zM2 15v-5q0-.425.288-.712T3 9h3q.425 0 .713.288T7 10v5H5.5v-1.5h-2V15zm1.5-3h2v-1.5h-2zm12 3v-5q0-.425.288-.712T16.5 9H21q.425 0 .713.288T22 10v5h-1.5v-4.5h-1V14H18v-3.5h-1V15z");
}
</style><path class="xem9l2b9x"/>`,
		"fallback": "material-symbols:atm-outline",
	});
}

export default Component;
