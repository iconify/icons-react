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
		"content": `<style>.hzg4plbih {
  d: path("M16.5 11.5c3 0 5 2 5 4.5c0 3.5-2.75 5.5-5.5 5.5M6 9.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Z");
}

.m6zzohblj {
  d: path("M2.5 15V9.5a7 7 0 0 1 14 0V15m-14 0h14v3.5h-14Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="m6zzohblj"/><path class="hzg4plbih"/></g>`,
		"fallback": "uix-sharp:astronaut-tether",
	});
}

export default Component;
