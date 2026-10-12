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
		"content": `<style>.bbz87bbtw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 7.5V5.25a2.5 2.5 0 0 1 2.5-2.5H7.5m9 0h2.25a2.5 2.5 0 0 1 2.5 2.5V7.5m0 9v2.25a2.5 2.5 0 0 1-2.5 2.5H16.5m-9 0H5.25a2.5 2.5 0 0 1-2.5-2.5V16.5M4.5 12h1.25m12.5 0h1.25M12 8.25q.45 3.3 3.75 3.75q-3.3.45-3.75 3.75q-.45-3.3-3.75-3.75q3.3-.45 3.75-3.75");
}
</style><path class="bbz87bbtw"/>`,
		"fallback": "iconoven:ai-detector",
	});
}

export default Component;
