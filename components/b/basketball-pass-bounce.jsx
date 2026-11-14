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
		"content": `<style>.ibqgnq3co {
  d: path("M11 7a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0Zm0 0h9");
}

.qtuyzdb0d {
  d: path("M12.25 3.75q3.25 3.25 0 6.5m6.5-6.5q-3.25 3.25 0 6.5M2.5 21h19M3 4l5 13.5l3.5-5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ibqgnq3co"/><path class="qtuyzdb0d"/></g>`,
		"fallback": "uix-sharp:basketball-pass-bounce",
	});
}

export default Component;
