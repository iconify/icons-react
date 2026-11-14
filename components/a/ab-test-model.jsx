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
		"content": `<style>.qgdakr69k {
  fill: currentColor;
  d: path("M2.5 5.5H9v13H2.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zwk-9lbqf {
  d: path("M15 5.5h6.5v13H15Zm-3 0v2m0 3.5v2m0 3.5v2");
}
</style><g class="ulnmmdpxh"><path class="qgdakr69k"/><path class="zwk-9lbqf"/></g>`,
		"fallback": "uix-sharp:ab-test-model",
	});
}

export default Component;
