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
		"content": `<style>.dgy70-f5n {
  d: path("M4 12a8 8 0 0 1 15-4m1 4a8 8 0 0 1-15 4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xd77cjube {
  d: path("M19 3.5V8h-4.5M5 20.5V16h4.5m0-4a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Z");
}
</style><g class="ulnmmdpxh"><path class="dgy70-f5n"/><path class="xd77cjube"/></g>`,
		"fallback": "uix-sharp:git-sync",
	});
}

export default Component;
