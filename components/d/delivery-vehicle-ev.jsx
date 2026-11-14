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
		"content": `<style>.uiwz_bqtc {
  d: path("M5.5 18.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm9 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM10.5 8l-2 4h3l-2 3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z11fxxb2g {
  d: path("M3 17V8a2 2 0 0 1 2-2h9l5 5h2v6Z");
}
</style><g class="ulnmmdpxh"><path class="z11fxxb2g"/><path class="uiwz_bqtc"/></g>`,
		"fallback": "uix-sharp:delivery-vehicle-ev",
	});
}

export default Component;
