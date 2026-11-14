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
		"content": `<style>.ke58ybbzd {
  d: path("M3.5 10.5L12 3.25l8.5 7.25v10h-17Z");
}

.r248pz7tb {
  d: path("M12 9.5c2.5 2.25 3 3.75 3 5a3 3 0 0 1-6 0c0-1.25.5-2.75 3-5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ke58ybbzd"/><path class="r248pz7tb"/></g>`,
		"fallback": "uix-sharp:cause-fuel-poverty",
	});
}

export default Component;
