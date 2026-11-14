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
		"content": `<style>.qljz65b7y {
  d: path("M9 8.75a3 3 0 0 1 6 0M12 11v9.5M3.5 10L7 11.5M20.5 10L17 11.5m-14 3h4m14 0h-4m-13.5 5l3.75-2m13.25 2l-3.75-2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yuopji0ht {
  d: path("M7 14a5 6.5 0 1 0 10 0a5 6.5 0 1 0-10 0Z");
}
</style><g class="ulnmmdpxh"><path class="yuopji0ht"/><path class="qljz65b7y"/></g>`,
		"fallback": "uix-sharp:bug",
	});
}

export default Component;
