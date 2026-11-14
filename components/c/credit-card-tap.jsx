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
		"content": `<style>.f1lcbmbja {
  d: path("M2.5 4.25h19v15.5h-19Zm5 7.75h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vrr0vxb2o {
  d: path("M9.99 9.911a3.25 3.25 0 0 1 0 4.178m2.834-5.817a6.5 6.5 0 0 1 0 7.456m3.12-8.603a9.75 9.75 0 0 1 0 9.75");
}
</style><g class="ulnmmdpxh"><path class="f1lcbmbja"/><path class="vrr0vxb2o"/></g>`,
		"fallback": "uix-sharp:credit-card-tap",
	});
}

export default Component;
