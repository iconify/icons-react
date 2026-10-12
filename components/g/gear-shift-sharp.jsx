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
		"content": `<style>.lpws5cv_a {
  cx: 12px;
  cy: 6.5px;
  r: 3.75px;
}

.n-rml2b7g {
  d: path("M10.75 5.25v2.5m2.5-2.5v2.5m-2.5-1.25h2.5M12 10.25v5.5m-5.12 4.57l1.49-3.64l.38-.93h6.5l.38.93l1.49 3.64l.38.93h-11z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="lpws5cv_a"/><path class="n-rml2b7g"/></g>`,
		"fallback": "iconoven:gear-shift-sharp",
	});
}

export default Component;
