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
		"content": `<style>.fwgkvqbcp {
  d: path("M15.75 15.25c0-1.75 1.25-3 2.75-3s2.75 1.25 2.75 3s-1.25 3-2.75 3c-2 0-3.5 1-4.5 2.75");
}

.wd2s-cjqy {
  d: path("M3.75 4.75h2.167l.833 2.5l3.25 11l3.5-11.5l.667-2h3.583v10.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="wd2s-cjqy"/><path class="fwgkvqbcp"/></g>`,
		"fallback": "iconoven:capricorn-sharp",
	});
}

export default Component;
