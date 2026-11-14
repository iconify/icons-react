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
		"content": `<style>.gwdha7bjd {
  d: path("m9 18.5l-3.75.75L2 4.75l9.75-2.25l.75 3");
}

.krr_-1bmc {
  d: path("M9 5.5h11.5V21H9Zm3.25 4.5h5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="gwdha7bjd"/><path class="krr_-1bmc"/></g>`,
		"fallback": "uix-sharp:battlecard",
	});
}

export default Component;
