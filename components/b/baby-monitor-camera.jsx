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
		"content": `<style>.j8hbh7j9d {
  d: path("M5 10.5a7 7 0 1 0 14 0a7 7 0 1 0-14 0Z");
}

.rvpmfyk6w {
  d: path("M9.415 4.853a2.5 2.5 0 1 1-1.768-1.768m10 4.83a2.5 2.5 0 1 1 1.768-1.768M9.25 11.5a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0Zm2.75 6V21m-4.5 0h9");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="j8hbh7j9d"/><path class="rvpmfyk6w"/></g>`,
		"fallback": "uix-sharp:baby-monitor-camera",
	});
}

export default Component;
