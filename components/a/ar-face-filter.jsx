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
		"content": `<style>.k3h79wm0c {
  d: path("M2.5 14a7 7 0 1 0 14 0a7 7 0 1 0-14 0ZM7 13h.01M12 13h.01");
}

.mowzyks6v {
  d: path("M6.75 16.75q2.75 2.25 5.5 0M18.5 2.5Q19 5.5 22 6q-3 .5-3.5 3.5Q18 6.5 15 6q3-.5 3.5-3.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="k3h79wm0c"/><path class="mowzyks6v"/></g>`,
		"fallback": "uix-sharp:ar-face-filter",
	});
}

export default Component;
