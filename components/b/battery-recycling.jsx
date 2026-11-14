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
		"content": `<style>.iw2rschqa {
  d: path("M8.922 20.457A9 9 0 0 1 7.5 4.206M17 6.75l2.75.75l.75-2.75");
}

.nf4wfrbrg {
  d: path("M15.078 3.543A9 9 0 0 1 16.5 19.794M7 17.25l-2.75-.75l-.75 2.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xryzn8bvp {
  d: path("M7 9.25h8.5v5.5H7ZM18.25 11v2");
}
</style><g class="ulnmmdpxh"><path class="xryzn8bvp"/><path class="iw2rschqa"/><path class="nf4wfrbrg"/></g>`,
		"fallback": "uix-sharp:battery-recycling",
	});
}

export default Component;
