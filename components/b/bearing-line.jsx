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
		"content": `<style>.od_uoiwkq {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0ZM12 2.5V5m0 7l4.5-4.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y0uiak4gs {
  d: path("M13.5 7.5h3v3M12 12h.01");
}
</style><g class="ulnmmdpxh"><path class="od_uoiwkq"/><path class="y0uiak4gs"/></g>`,
		"fallback": "uix-sharp:bearing-line",
	});
}

export default Component;
