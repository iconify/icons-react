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

.nnvnx_rcq {
  d: path("M5.5 7h5v5h-5Zm8 1h5m-5 3h2.8m4.45 7.5A2.75 2.75 0 1 1 18 15.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="j58zp8b4q"/><path class="nnvnx_rcq"/><path class="is8nqnbzt"/></g>`,
		"fallback": "uix-sharp:dynamic-content",
	});
}

export default Component;
