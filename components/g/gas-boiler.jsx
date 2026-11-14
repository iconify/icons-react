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
		"content": `<style>.s7_nvoqwa {
  d: path("M12 5.5c2 2 3.25 4 3.25 6.5a3.25 3.25 0 0 1-6.5 0C8.75 9.5 10 7.5 12 5.5ZM9 18v3.5m6-3.5v3.5");
}

.tqq-p4l1u {
  d: path("M5.5 2.5h13V18h-13Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="tqq-p4l1u"/><path class="s7_nvoqwa"/></g>`,
		"fallback": "uix-sharp:gas-boiler",
	});
}

export default Component;
