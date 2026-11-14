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
		"content": `<style>.g-56du9fb {
  d: path("M15.25 17.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm4 1.75L21 21");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ymopbeb6b {
  d: path("M12.5 18h-10V5h19v9.4M8.5 5V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1V5m-13 6h19");
}
</style><g class="ulnmmdpxh"><path class="ymopbeb6b"/><path class="g-56du9fb"/></g>`,
		"fallback": "uix-sharp:case-search",
	});
}

export default Component;
