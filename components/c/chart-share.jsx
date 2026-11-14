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

.vscj27-ru {
  d: path("M6.5 14L10 8.5l3 2.5l6-6.5m1.25 10.75L15.75 18l4.5 2.75");
}

.y2edr1bye {
  fill: currentColor;
  d: path("M19 15.25a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0ZM14.5 18a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm4.5 2.75a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Z");
}
</style><g class="ulnmmdpxh"><path class="qr98uh62i"/><path class="vscj27-ru"/><path class="y2edr1bye"/></g>`,
		"fallback": "uix-sharp:chart-share",
	});
}

export default Component;
