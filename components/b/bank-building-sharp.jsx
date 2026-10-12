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
		"content": `<style>.qo7e3fbwg {
  d: path("M3.75 20.25v-12l.84-.54l6.57-4.17L12 3l.84.54l6.57 4.17l.84.54v13H3.75z");
}

.t3pw08qqk {
  d: path("m14 11l-.667-1H9.75v1.6c0 2.15 4.5 1.15 4.5 3.3v1.6h-3.583l-.667-1m2-6.75V10m0 6.5v1.25M6.75 11v6.5m10.5-6.5v6.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="qo7e3fbwg"/><path class="t3pw08qqk"/></g>`,
		"fallback": "iconoven:bank-building-sharp",
	});
}

export default Component;
