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
		"content": `<style>.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.tk938c4ke {
  d: path("M12 4.5L12 14.5C12 16.1667 11 19.5 7 19.5");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.xcbzr4b0x {
  stroke-linejoin: round;
  d: path("M17 9.5L12 4.5L7 9.5");
}
</style><g class="ipq1z-bjh"><path class="xcbzr4b0x"/><path class="tk938c4ke"/></g>`,
		"fallback": "solar:arrow-to-top-left-line-duotone",
	});
}

export default Component;
