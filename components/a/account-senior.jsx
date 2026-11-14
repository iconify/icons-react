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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ii_3isb1e {
  d: path("M17.75 14c-.05-.51-.56-.75-1.25-.75c-.84 0-1.35.42-1.25 1c-.1 1.31 2.6.77 2.5 2.5c.1.55-.47 1-1.25 1c-.72 0-1.23-.3-1.25-.75m1.25-4.75v1m0 4.5v1");
}

.o4748wbuq {
  d: path("M9 19.75V6.25a3.25 3.25 0 0 0-6.5 0V8m6.375 11.75h.25a.875.875 0 0 1 .875.875a.875.875 0 0 1-.875.875h-.25A.875.875 0 0 1 8 20.625a.875.875 0 0 1 .875-.875M11.5 15.5a5 5 0 1 0 10 0a5 5 0 1 0-10 0");
}
</style><g class="hntgybcog"><path class="o4748wbuq"/><path class="ii_3isb1e"/></g>`,
		"fallback": "uix:account-senior",
	});
}

export default Component;
