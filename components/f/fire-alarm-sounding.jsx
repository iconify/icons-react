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
		"content": `<style>.gzraq3bes {
  d: path("M2.5 6h12v12h-12Z");
}

.kh45z_ozd {
  d: path("M5.25 14.75h6.5m-5.5 0V12a2.25 2.25 0 0 1 4.5 0v2.75m6.663-5.875a6.25 6.25 0 0 1 0 6.25m2.598-7.75a9.25 9.25 0 0 1 0 9.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="gzraq3bes"/><path class="kh45z_ozd"/></g>`,
		"fallback": "uix-sharp:fire-alarm-sounding",
	});
}

export default Component;
