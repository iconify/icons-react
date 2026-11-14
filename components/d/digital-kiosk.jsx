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
		"content": `<style>.bfj_46lvz {
  d: path("M9.75 5.25h4.5v6.5h-4.5ZM10 15.5h4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xfr1zeb6q {
  d: path("M7 21.5v-17a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v17m-12.5 0h15");
}
</style><g class="ulnmmdpxh"><path class="xfr1zeb6q"/><path class="bfj_46lvz"/></g>`,
		"fallback": "uix-sharp:digital-kiosk",
	});
}

export default Component;
