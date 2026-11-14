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
		"content": `<style>.s578e7boi {
  d: path("M6.5 11.5L12 15l5.5-3.5M12 8v13.5m0-4.25c-1.5-1.5-3.75-1.5-3.75 0s2.25 1.5 3.75 0c1.5 1.5 3.75 1.5 3.75 0s-2.25-1.5-3.75 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wwqa3ub5c {
  d: path("M10.5 3.5a1.5 1.5 0 0 1 3 0a1.5 1.5 0 0 1 0 3a1.5 1.5 0 0 1-3 0a1.5 1.5 0 0 1 0-3Zm-7 5a1.5 1.5 0 0 1 3 0a1.5 1.5 0 0 1 0 3a1.5 1.5 0 0 1-3 0a1.5 1.5 0 0 1 0-3Zm14 0a1.5 1.5 0 0 1 3 0a1.5 1.5 0 0 1 0 3a1.5 1.5 0 0 1-3 0a1.5 1.5 0 0 1 0-3Z");
}
</style><g class="ulnmmdpxh"><path class="wwqa3ub5c"/><path class="s578e7boi"/></g>`,
		"fallback": "uix-sharp:flower-bouquet",
	});
}

export default Component;
