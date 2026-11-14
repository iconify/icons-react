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
		"content": `<style>.kmv4ubcsz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.5 6l19-2M4 5.75V21.5M20 4.25V21.5M7.5 10h9v9h-9ZM12 5v5m-4.5 3.5h9");
}
</style><path class="kmv4ubcsz"/>`,
		"fallback": "uix-sharp:cable-car",
	});
}

export default Component;
