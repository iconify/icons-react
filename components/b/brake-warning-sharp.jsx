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
		"content": `<style>.o_ly6ursf {
  cx: 12px;
  cy: 12px;
  r: 6.75px;
}

.rm2ogybnb {
  d: path("M12 8.75v3.75m0 2.75v.01M4.25 6.5a12 12 0 0 0 0 11m15.5-11a12 12 0 0 1 0 11");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="o_ly6ursf"/><path class="rm2ogybnb"/></g>`,
		"fallback": "iconoven:brake-warning-sharp",
	});
}

export default Component;
