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
		"content": `<style>.fshtepbwx {
  d: path("M7.5 21.5V17a4.5 4.5 0 0 1 9 0v4.5");
}

.ulbgdr79k {
  fill: currentColor;
  d: path("m12 3l2.25 3a2.5 2.5 0 1 1-4.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="fshtepbwx"/><path class="ulbgdr79k"/></g>`,
		"fallback": "uix-sharp:glucose-test",
	});
}

export default Component;
