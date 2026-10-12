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
		"content": `<style>.ze37-bbiy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 2.75l1.75 2.148v.952a1.75 1.75 0 0 1-3.5 0v-.952zM3.6 10H21l-.33.5l-2.34 3.5l-.33.5H6l-.33-.5l-2.34-3.5L3 10zm6.4 4.5v6.75m4-6.75v6.75m-7.25 0h10.5");
}
</style><path class="ze37-bbiy"/>`,
		"fallback": "iconoven:baptism-font-sharp",
	});
}

export default Component;
