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
		"content": `<style>.r3fz5gbpj {
  d: path("M6 8a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm8 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm-6 5v5m-2-1.5h4m6-3.5v5m-2-3.5h4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yudiqacsm {
  d: path("M2.5 3h19v18h-19Z");
}
</style><g class="ulnmmdpxh"><path class="yudiqacsm"/><path class="r3fz5gbpj"/></g>`,
		"fallback": "uix-sharp:broadcast-mixer",
	});
}

export default Component;
