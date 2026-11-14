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
		"content": `<style>.teczzebqw {
  d: path("M2.5 16c.5-4 2-5.75 5-6.25c1.5-3.5 3.5-4.5 6-4.5c3 0 4.5 2.5 5.5 5c1.75.5 2.5 2.5 2.5 5.75ZM5 16a2 2 0 0 0 4 0m6 0a2 2 0 0 0 4 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yzwibxb7e {
  d: path("M12 16q-.75-3.25 1-6.25");
}
</style><g class="ulnmmdpxh"><path class="teczzebqw"/><path class="yzwibxb7e"/></g>`,
		"fallback": "uix-sharp:car-cover",
	});
}

export default Component;
