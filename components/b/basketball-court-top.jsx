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
		"content": `<style>.hbof2h9sl {
  d: path("M9.25 12a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0ZM2.5 9h4v6h-4Zm15 0h4v6h-4Z");
}

.hkulnu14m {
  d: path("M2.5 5.5h19v13h-19Zm9.5 0v13");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hkulnu14m"/><path class="hbof2h9sl"/></g>`,
		"fallback": "uix-sharp:basketball-court-top",
	});
}

export default Component;
