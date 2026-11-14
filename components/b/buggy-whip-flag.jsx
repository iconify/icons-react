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
		"content": `<style>.cje1rdbar {
  d: path("M5 19a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm10.5 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm-11-9V2.5m0 0l6 2l-6 2Z");
}

.hsegy097s {
  d: path("M2.5 10h12v7h-12Zm12 2h4l3 3v2h-7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hsegy097s"/><path class="cje1rdbar"/></g>`,
		"fallback": "uix-sharp:buggy-whip-flag",
	});
}

export default Component;
