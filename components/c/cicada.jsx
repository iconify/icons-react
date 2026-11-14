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
		"content": `<style>.b88t74biz {
  d: path("M12 4.5c2.5 0 3 2 3 4c0 4-1.5 8-3 11c-1.5-3-3-7-3-11c0-2 .5-4 3-4Z");
}

.ez18lv9eb {
  d: path("M9.5 11.5c-4 1-6.5 4.5-7 9c4-1 6.5-3 7.75-5.5m4.25-3.5c4 1 6.5 4.5 7 9c-4-1-6.5-3-7.75-5.5m-8.5-8.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm9.5 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="b88t74biz"/><path class="ez18lv9eb"/></g>`,
		"fallback": "uix-sharp:cicada",
	});
}

export default Component;
