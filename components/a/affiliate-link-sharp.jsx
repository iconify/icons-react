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
		"content": `<style>.fs3jhybjb {
  cx: 12px;
  cy: 6.75px;
  r: 1.5px;
}

.mrbssfbyi {
  d: path("M9.25 13.25h-3a2.75 2.75 0 0 0 0 5.5h3m5.5-5.5h3a2.75 2.75 0 0 1 0 5.5h-3M9 16h6");
}

.mx0ir3bdi {
  cx: 12px;
  cy: 6.75px;
  r: 4px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="mx0ir3bdi"/><circle class="fs3jhybjb"/><path class="mrbssfbyi"/></g>`,
		"fallback": "iconoven:affiliate-link-sharp",
	});
}

export default Component;
