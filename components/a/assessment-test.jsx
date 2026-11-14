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
		"content": `<style>.ldrjl0bwf {
  d: path("M3.5 2.5h17V16h-17ZM2 19h20");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ymz3hescv {
  d: path("M9 9.75a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm3-4.5v1.5m0 3l1.25-1.25");
}
</style><g class="ulnmmdpxh"><path class="ldrjl0bwf"/><path class="ymz3hescv"/></g>`,
		"fallback": "uix-sharp:assessment-test",
	});
}

export default Component;
