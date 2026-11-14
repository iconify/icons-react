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
		"content": `<style>.crt2xgbyp {
  d: path("M3 10.25v3.25a9 5.25 0 0 0 18 0v-3.25");
}

.t9r0xhbbf {
  d: path("M6 10.25a6 2 0 1 0 12 0a6 2 0 1 0-12 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ywild8b0o {
  d: path("M3 10.25a9 5.25 0 1 0 18 0a9 5.25 0 1 0-18 0Z");
}
</style><g class="ulnmmdpxh"><path class="ywild8b0o"/><path class="crt2xgbyp"/><path class="t9r0xhbbf"/></g>`,
		"fallback": "uix-sharp:band-ring",
	});
}

export default Component;
