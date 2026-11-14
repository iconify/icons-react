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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v4fxj5lot {
  d: path("M12.5 5.75a7 7 0 1 0 0 12.5M15.75 3c3.75 1.5 5.75 5 5.75 9s-2 7.5-5.75 9c-1.25-4-1.25-14 0-18ZM7.5 10.5h.01");
}

.z_gaqcbca {
  d: path("M6 14.5q2 1.5 4 0");
}
</style><g class="ulnmmdpxh"><path class="v4fxj5lot"/><path class="z_gaqcbca"/></g>`,
		"fallback": "uix-sharp:impostor-syndrome",
	});
}

export default Component;
