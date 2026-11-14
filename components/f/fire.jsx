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
		"content": `<style>.podqz9dmu {
  d: path("M12 21.5c-1.4 0-2.5-1.1-2.5-2.5c0-1.75 1.5-2.5 2.5-4.5c1 2 2.5 2.75 2.5 4.5c0 1.4-1.1 2.5-2.5 2.5Z");
}

.tj-sfcxou {
  d: path("M12 21.5c-4 0-7-2.75-7-6.5c0-4 3.5-6 4.5-10.5C11 6 12 7.75 12 10c1.5-.75 2.5-2 2.75-3.5c2.75 2 4.25 5 4.25 8.5c0 3.75-3 6.5-7 6.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="tj-sfcxou"/><path class="podqz9dmu"/></g>`,
		"fallback": "uix-sharp:fire",
	});
}

export default Component;
