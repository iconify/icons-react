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
		"content": `<style>.qr98uh62i {
  d: path("M3.5 3v17.5h8.8");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vd-aezllp {
  d: path("M6.5 14L10 8.5l3 2.5l6-6.5m-3.25 13.25l-.25.25a1.75 1.75 0 0 0 2.5 2.5l.25-.25m-.5-4.5l.25-.25a1.75 1.75 0 0 1 2.5 2.5l-.25.25M17 19l2-2");
}
</style><g class="ulnmmdpxh"><path class="qr98uh62i"/><path class="vd-aezllp"/></g>`,
		"fallback": "uix-sharp:chart-link",
	});
}

export default Component;
