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
		"content": `<style>.a53c6ebwy {
  fill: currentColor;
  d: path("M9 12.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k_3k52kzi {
  d: path("M10 4.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m-6.5 14a2 2 0 1 0 4 0a2 2 0 1 0-4 0m13 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0M12 6.5v3m-2.25 5L7 17.25m7.25-2.75L17 17.25");
}
</style><g class="hntgybcog"><path class="a53c6ebwy"/><path class="k_3k52kzi"/></g>`,
		"fallback": "uix:content-cluster",
	});
}

export default Component;
