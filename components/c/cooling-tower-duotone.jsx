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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.n029bdxea {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M8 10h8c-.747 1.116-1 2.681-1 4c.002 2.838 1.805 5.353 4 7H5c2.195-1.647 3.998-4.162 4-7c0-1.319-.253-2.884-1-4");
}

.yjc46hbgy {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 10h8m-8 0c.67 1 1 2.5 1 4c0 3-2 5.5-4 7m11-11c-.67 1-1 2.5-1 4c0 3 2 5.5 4 7M3 21h18M7 6a2 2 0 1 1 4 0a3 3 0 0 1 6 0");
}
</style><g class="ft5dv1b6b"><path class="n029bdxea"/><path class="yjc46hbgy"/></g>`,
		"fallback": "coolicons:cooling-tower-duotone",
	});
}

export default Component;
