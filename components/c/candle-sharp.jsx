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
		"content": `<style>.e4g_5pjft {
  d: path("M7.5 13.5h3.25V15");
}

.pgw-r2bym {
  d: path("m12 2.75l1.9 1.748V5.9a1.9 1.9 0 0 1-3.8 0V4.498zm-4.5 7.5h9v11h-9z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="pgw-r2bym"/><path class="e4g_5pjft"/></g>`,
		"fallback": "iconoven:candle-sharp",
	});
}

export default Component;
