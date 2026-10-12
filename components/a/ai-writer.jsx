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
		"content": `<style>.mo56a1wsn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 6h9m-9 4.5h7m-7 4.5h5M19.42 4.92l1.41 1.41q.42.42 0 .84l-8.91 8.91q-.42.42-.97.65l-1.9.79q-.55.23-.32-.32l.79-1.9q.23-.55.63-1l8.45-9.35q.4-.45.82-.03m-1.67 9.83q.36 2.64 3 3q-2.64.36-3 3q-.36-2.64-3-3q2.64-.36 3-3");
}
</style><path class="mo56a1wsn"/>`,
		"fallback": "iconoven:ai-writer",
	});
}

export default Component;
