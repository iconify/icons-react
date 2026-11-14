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
		"content": `<style>.qfz86qebg {
  d: path("M15 15.5h6v5.75h-6Zm0 2.25h6m-4.25-3.25V16m2.5-1.5V16");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v9jthywmw {
  d: path("M12.172 19.5H2.5v-9L11 3l8.5 7.5v1.228");
}
</style><g class="ulnmmdpxh"><path class="v9jthywmw"/><path class="qfz86qebg"/></g>`,
		"fallback": "uix-sharp:house-clock",
	});
}

export default Component;
