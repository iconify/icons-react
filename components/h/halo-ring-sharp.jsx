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
		"content": `<style>.ivl5k1bso {
  cx: 12px;
  cy: 11px;
  r: 2.75px;
}

.jpa2tta9t {
  d: path("M4.5 21.25c0-3 3.25-5 7.5-5s7.5 2 7.5 5Z");
}

.x0ulejaqb {
  d: path("M12 2.75c3.6 0 6.5.67 6.5 1.5s-2.9 1.5-6.5 1.5s-6.5-.67-6.5-1.5s2.9-1.5 6.5-1.5Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="x0ulejaqb"/><circle class="ivl5k1bso"/><path class="jpa2tta9t"/></g>`,
		"fallback": "iconoven:halo-ring-sharp",
	});
}

export default Component;
