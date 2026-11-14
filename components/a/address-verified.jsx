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
		"content": `<style>.nk-1g1b0v {
  d: path("M16 7V4h2v4.75m-4.25 9a4 4 0 1 0 8 0a4 4 0 1 0-8 0Z");
}

.o7ukv29ko {
  d: path("m15.75 17.75l1.5 1.5l2.5-2.75");
}

.r934w1bms {
  d: path("M11.56 20.5H4v-10l8-7l8 7v.84");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="r934w1bms"/><path class="nk-1g1b0v"/><path class="o7ukv29ko"/></g>`,
		"fallback": "uix-sharp:address-verified",
	});
}

export default Component;
