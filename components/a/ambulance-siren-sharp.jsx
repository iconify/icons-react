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
		"content": `<style>.wb72fqb2n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 14.5v-2.25a3 3 0 0 1 6 0v2.25Zm9.5 0v-2.25a3 3 0 0 1 6 0v2.25Zm-11 0h18.5v4.75H2.75zM6 16.9h12M7.25 4.5v2m-4-.25L4.5 7.5m6.75-1.25L10 7.5");
}
</style><path class="wb72fqb2n"/>`,
		"fallback": "iconoven:ambulance-siren-sharp",
	});
}

export default Component;
