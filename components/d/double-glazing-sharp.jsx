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
		"content": `<style>.h84qtj2uh {
  d: path("M2.75 6.25h14v15h-14zm3.5 8l3.5-3.5m-3.5 7l6.5-6.5");
}

.sc7posbsa {
  d: path("M6.25 6.25v-3.5h15v15h-4.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="sc7posbsa"/><path class="h84qtj2uh"/></g>`,
		"fallback": "iconoven:double-glazing-sharp",
	});
}

export default Component;
