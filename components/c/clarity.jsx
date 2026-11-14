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
		"content": `<style>.ig69czf0c {
  fill: currentColor;
  d: path("m12 3l-9 9l9 9Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v0dzfzbhx {
  d: path("m12 3l9 9l-9 9l-9-9Z");
}
</style><g class="ulnmmdpxh"><path class="v0dzfzbhx"/><path class="ig69czf0c"/></g>`,
		"fallback": "uix-sharp:clarity",
	});
}

export default Component;
