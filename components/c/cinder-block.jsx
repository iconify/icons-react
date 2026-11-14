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
		"content": `<style>.rq38klbjc {
  d: path("M5.5 7h4.75v4.75H5.5Zm8.25 0h4.75v4.75h-4.75Z");
}

.rrrneebqb {
  d: path("M2.5 4h19v16h-19Zm0 10.5h19");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="rrrneebqb"/><path class="rq38klbjc"/></g>`,
		"fallback": "uix-sharp:cinder-block",
	});
}

export default Component;
