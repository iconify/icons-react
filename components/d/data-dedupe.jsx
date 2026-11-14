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
		"content": `<style>.hpfflob7o {
  d: path("M6 6h12v11H6Z");
}

.sfpr_2uud {
  d: path("M3 14V5a2 2 0 0 1 2-2h10m0 17.25h6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hpfflob7o"/><path class="sfpr_2uud"/></g>`,
		"fallback": "uix-sharp:data-dedupe",
	});
}

export default Component;
