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
		"content": `<style>.x47ljpbqu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 8.5h17l-6.5 6v5L10 21v-6.5ZM5 5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm5.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0ZM16 5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}
</style><path class="x47ljpbqu"/>`,
		"fallback": "uix-sharp:hiring-funnel",
	});
}

export default Component;
