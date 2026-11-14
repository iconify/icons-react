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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vhnk1g3zx {
  d: path("m9.5 13l2.5-2.5l2.5 2.5");
}

.wiog3hbvi {
  d: path("M5.5 18c4 0 6.5-2.5 6.5-7.5m6.5 7.5c-4 0-6.5-2.5-6.5-7.5");
}

.zoej7biec {
  d: path("M9.5 2.5c0 1.75-1.25 2.5-3 3L5 6c-1.25.5-1.75 1.25-1.5 2.5l2.25 5c.25 1-.5 4-.5 8h13.5c0-4-.75-7-.5-8l2.25-5c.25-1.25-.25-2-1.5-2.5l-1.5-.5c-1.75-.5-3-1.25-3-3");
}
</style><g class="ulnmmdpxh"><path class="zoej7biec"/><path class="wiog3hbvi"/><path class="vhnk1g3zx"/></g>`,
		"fallback": "uix-sharp:heimlich-manoeuvre",
	});
}

export default Component;
