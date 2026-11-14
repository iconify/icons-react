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
		"content": `<style>.k-d1dvbvs {
  d: path("M5.25 18.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm9.5 0a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.voq_zp7gf {
  d: path("M2.5 17V8a2 2 0 0 1 2-2H13v11ZM13 9.5h4l3.5 3.5v4H13");
}
</style><g class="ulnmmdpxh"><path class="voq_zp7gf"/><path class="k-d1dvbvs"/></g>`,
		"fallback": "uix-sharp:delivery-method",
	});
}

export default Component;
