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
		"content": `<style>.oombvifuw {
  d: path("M8 2.5h8m-6.5 0V8a7 7 0 1 0 5 0V2.5M6 11h12");
}

.pvgevhp6s {
  d: path("M8.25 17a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm5-2a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="oombvifuw"/><path class="pvgevhp6s"/></g>`,
		"fallback": "uix-sharp:flask-bubbling",
	});
}

export default Component;
