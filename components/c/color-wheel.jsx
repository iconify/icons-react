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
		"content": `<style>.h9wjmwbsr {
  d: path("M9 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm3-9.5V9m8.227-1.75l-5.629 3.25m5.629 6.25l-5.629-3.25M12 21.5V15m-8.227 1.75l5.629-3.25M3.773 7.25l5.629 3.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zdgu3ybil {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0Z");
}
</style><g class="ulnmmdpxh"><path class="zdgu3ybil"/><path class="h9wjmwbsr"/></g>`,
		"fallback": "uix-sharp:color-wheel",
	});
}

export default Component;
