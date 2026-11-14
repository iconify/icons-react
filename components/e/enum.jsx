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
		"content": `<style>.ffl91-b8z {
  fill: currentColor;
  d: path("M3 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.kfe_m-bbg {
  d: path("M3 19a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm7-14h11m-11 7h11m-11 7h11");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yo82nz7ti {
  d: path("M3 5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}
</style><g class="ulnmmdpxh"><path class="yo82nz7ti"/><path class="ffl91-b8z"/><path class="kfe_m-bbg"/></g>`,
		"fallback": "uix-sharp:enum",
	});
}

export default Component;
