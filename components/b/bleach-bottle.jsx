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
		"content": `<style>.cms81rbfl {
  d: path("M12 11c1.5 1.75 2.75 3.5 2.75 5a2.75 2.75 0 0 1-5.5 0c0-1.5 1.25-3.25 2.75-5Z");
}

.jdm4rmbnk {
  d: path("M5 21.5V10l3-2.5h10A1.5 1.5 0 0 1 19.5 9v11a1.5 1.5 0 0 1-1.5 1.5Zm2-18h4v4H7Zm7 4v-3h3.5A1.5 1.5 0 0 1 19 6v1.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="jdm4rmbnk"/><path class="cms81rbfl"/></g>`,
		"fallback": "uix-sharp:bleach-bottle",
	});
}

export default Component;
