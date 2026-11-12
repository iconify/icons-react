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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.sey7_co9z {
  stroke-opacity: 0.4;
  d: path("M3 7V4a1 1 0 0 1 1-1h3m4 0h3a1 1 0 0 1 1 1v1M3 11v3a1 1 0 0 0 1 1h1m14-6h1a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1-1 1h-3m-8-2v1a1 1 0 0 0 1 1h3");
}

.xz5h41fop {
  d: path("M9 10a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1Z");
}
</style><g class="nrj6p8qat"><path class="sey7_co9z"/><path class="xz5h41fop"/></g>`,
		"fallback": "coolicons:boolean-intersect-duocolor",
	});
}

export default Component;
