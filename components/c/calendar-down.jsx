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
		"content": `<style>.dd8o6ocnx {
  d: path("M9.75 15.5L12 17.75l2.25-2.25");
}

.tx5uhxiqa {
  d: path("M3.5 5h17v15.5h-17ZM8 3v4m8-4v4M3.5 10h17M12 12.75v5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="tx5uhxiqa"/><path class="dd8o6ocnx"/></g>`,
		"fallback": "uix-sharp:calendar-down",
	});
}

export default Component;
