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
		"content": `<style>.aa_bxhb2u {
  d: path("m8 11l3 3l5-5.5");
}

.brnfn5bxw {
  d: path("M12 3.5c5.25 0 9 3.25 9 7.5s-3.75 7.5-9 7.5c-1.25 0-2.5-.25-3.5-.5L4 20.5l1-4.25C3.75 14.75 3 13 3 11c0-4.25 3.75-7.5 9-7.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="brnfn5bxw"/><path class="aa_bxhb2u"/></g>`,
		"fallback": "uix-sharp:first-contact-resolution",
	});
}

export default Component;
