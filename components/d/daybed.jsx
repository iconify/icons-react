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
		"content": `<style>.cnvmw8ouh {
  d: path("M5.25 9h4.5v3h-4.5Z");
}

.p73xu4bns {
  d: path("M2.5 19V6h19v13m-19-7h19m-19 4h19");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="p73xu4bns"/><path class="cnvmw8ouh"/></g>`,
		"fallback": "uix-sharp:daybed",
	});
}

export default Component;
