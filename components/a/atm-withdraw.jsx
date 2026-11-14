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
		"content": `<style>.fcgjn5_9h {
  d: path("M11.6 21.5H4v-19h16v9.6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vlid09cwn {
  d: path("M7 5h10v6H7Zm-.5 8.75h6.9m-6.65 3.5h.01m2.49 0h.01m2.49 0h.01M15 21l5.25-5.25m-4-.25h4.25v4.25");
}
</style><g class="ulnmmdpxh"><path class="fcgjn5_9h"/><path class="vlid09cwn"/></g>`,
		"fallback": "uix-sharp:atm-withdraw",
	});
}

export default Component;
