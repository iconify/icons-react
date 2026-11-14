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
		"content": `<style>.qosnc3z1d {
  d: path("M6.25 9.25a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0Zm8.25 4.25H16a1.5 1.5 0 0 1 1.5 1.5v3a1.75 1.75 0 0 0 3.5 0V8l-2.5-2.5M9 9.25l2-2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w_njl0ybn {
  d: path("M3.5 3h11v18.5h-11Z");
}
</style><g class="ulnmmdpxh"><path class="w_njl0ybn"/><path class="qosnc3z1d"/></g>`,
		"fallback": "uix-sharp:fuel-octane",
	});
}

export default Component;
