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
		"content": `<style>.q0f-lgkcm {
  d: path("M5 2.5h14v19H5Z");
}

.tyx27jhsf {
  d: path("M14.5 5.5h-5V11h5m-5-2.75h4m-5 6.25h7M10 18h4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="q0f-lgkcm"/><path class="tyx27jhsf"/></g>`,
		"fallback": "uix-sharp:eye-chart",
	});
}

export default Component;
