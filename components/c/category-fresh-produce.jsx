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
		"content": `<style>.m06k5kbfv {
  d: path("M12 8S7 5.5 5 9.5c-1.5 3.5 1 10 7 10s8.5-6.5 7-10c-2-4-7-1.5-7-1.5Z");
}

.u_8fqnblg {
  d: path("M12 8c0-2.5 1.5-4.5 4-5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="m06k5kbfv"/><path class="u_8fqnblg"/></g>`,
		"fallback": "uix-sharp:category-fresh-produce",
	});
}

export default Component;
