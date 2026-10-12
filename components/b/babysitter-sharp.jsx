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
		"content": `<style>.l4u0_mb7c {
  d: path("M2.75 21.25V17.5a5 5 0 0 1 10 0v3.75Z");
}

.lefub1brs {
  d: path("M16 21.25v-1.5a2.5 2.5 0 0 1 5 0v1.5Zm-3.25-3l1.6 1.75L16 18.25");
}

.wrmaxej7p {
  cx: 18.5px;
  cy: 13.75px;
  r: 1.75px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zeo8pmb8i {
  cx: 7.75px;
  cy: 6.75px;
  r: 2.75px;
}
</style><g class="x2cwu0gfd"><circle class="zeo8pmb8i"/><path class="l4u0_mb7c"/><circle class="wrmaxej7p"/><path class="lefub1brs"/></g>`,
		"fallback": "iconoven:babysitter-sharp",
	});
}

export default Component;
