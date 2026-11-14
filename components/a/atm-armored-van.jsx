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
		"content": `<style>.irp0qqbjf {
  d: path("M5.25 18.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm10 0a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0ZM6 10h4.5v3.5H6Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wywtiva-g {
  d: path("M2.5 17V9a2 2 0 0 1 2-2H14v10ZM14 10h4l3.5 3v4H14");
}
</style><g class="ulnmmdpxh"><path class="wywtiva-g"/><path class="irp0qqbjf"/></g>`,
		"fallback": "uix-sharp:atm-armored-van",
	});
}

export default Component;
