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
		"content": `<style>.e96l80bah {
  d: path("M12 7.2C12 5.2 12.8 3.4 14.5 2");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.fx39z1bhl {
  d: path("M12 7.2C10.6 6.2 9 5.5 7.6 5.5C4.6 5.5 3 8.3 3 11.6C3 16.6 6 22 9 22C10.3 22 11 21.3 12 21.3C13 21.3 13.7 22 15 22C18 22 21 16.6 21 11.6C21 8.3 19.4 5.5 16.4 5.5C15 5.5 13.4 6.2 12 7.2Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="e96l80bah"/><path class="fx39z1bhl"/></g>`,
		"fallback": "solar:apple-line-duotone",
	});
}

export default Component;
