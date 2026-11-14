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
		"content": `<style>.g3dgh4boa {
  d: path("M4.5 9v10A2.5 2.5 0 0 0 7 21.5h10a2.5 2.5 0 0 0 2.5-2.5V9");
}

.o2ob_ubsf {
  d: path("M9 18V3.5h6V18M4.5 13h15");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="g3dgh4boa"/><path class="o2ob_ubsf"/></g>`,
		"fallback": "uix-sharp:electrochemistry",
	});
}

export default Component;
