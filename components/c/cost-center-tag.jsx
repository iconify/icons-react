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
		"content": `<style>.hmemhacds {
  d: path("M8.5 5.5h12v13h-12l-5-6.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zmh-2ludh {
  d: path("M7 12a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm5.75 0H17");
}
</style><g class="ulnmmdpxh"><path class="hmemhacds"/><path class="zmh-2ludh"/></g>`,
		"fallback": "uix-sharp:cost-center-tag",
	});
}

export default Component;
