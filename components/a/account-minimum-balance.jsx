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
		"content": `<style>.dv1ipeb_u {
  d: path("M6 14.5v.75a6.75 3.25 0 0 0 13.5 0V12.5m-6.75-6.25c-.09-.36-.37-.49-.75-.5c-.46.01-.74.24-.75.5c.01.78 1.49.49 1.5 1.5c-.01.24-.32.49-.75.5c-.4-.01-.68-.18-.75-.5m.75-3v.75m0 3v.75m-9.5 12h2m3 0h3m3 0h3m3 0h2");
}

.kyjjgqb2m {
  d: path("M5.25 7a6.75 3.25 0 1 0 13.5 0a6.75 3.25 0 1 0-13.5 0Z");
}

.t2b-y0b8a {
  d: path("M4.5 9.75v2.75a6.75 3.25 0 0 0 13.5 0v-1.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vgg01abra {
  d: path("M5.25 7v2.75a6.75 3.25 0 0 0 13.5 0V7");
}
</style><g class="ulnmmdpxh"><path class="kyjjgqb2m"/><path class="vgg01abra"/><path class="t2b-y0b8a"/><path class="dv1ipeb_u"/></g>`,
		"fallback": "uix-sharp:account-minimum-balance",
	});
}

export default Component;
