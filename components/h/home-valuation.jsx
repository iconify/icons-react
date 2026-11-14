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
		"content": `<style>.ozr5a1ypi {
  d: path("M10.5 14a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm2.5-1l3-4m-1.75 9L18 14.5l3.75 3.5v3.75h-7.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zfbfsqv6v {
  d: path("M2.5 14a9.5 9.5 0 0 1 19 0M5.25 7.25l1.5 1.5M12 4.5v2m6.75.75l-1.5 1.5");
}
</style><g class="ulnmmdpxh"><path class="zfbfsqv6v"/><path class="ozr5a1ypi"/></g>`,
		"fallback": "uix-sharp:home-valuation",
	});
}

export default Component;
