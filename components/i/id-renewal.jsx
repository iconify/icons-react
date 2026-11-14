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
		"content": `<style>.is8nqnbzt {
  d: path("M16.75 14.5L18 15.75L16.75 17");
}

.j58zp8b4q {
  d: path("M12.5 19h-10V4h19v11.3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x78os0qib {
  d: path("M6 9.25a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM5 15.5a3 3 0 0 1 6 0M13.5 9h5m2.25 9.5A2.75 2.75 0 1 1 18 15.75");
}
</style><g class="ulnmmdpxh"><path class="j58zp8b4q"/><path class="x78os0qib"/><path class="is8nqnbzt"/></g>`,
		"fallback": "uix-sharp:id-renewal",
	});
}

export default Component;
