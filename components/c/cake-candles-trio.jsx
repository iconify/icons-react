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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.upjum084b {
  d: path("M3.5 12h17v9h-17Z");
}

.x2ffp0lub {
  d: path("M3.5 16q2.25 2 4.5 0q2-2 4 0t4 0q2.25-2 4.5 0m-14-7v3M12 9v3m5.5-3v3m-11-9.5c1.25 1.5 1.25 3.75 0 3.75S5.25 4 6.5 2.5Zm5.5 0c1.25 1.5 1.25 3.75 0 3.75S10.75 4 12 2.5Zm5.5 0c1.25 1.5 1.25 3.75 0 3.75S16.25 4 17.5 2.5Z");
}
</style><g class="ulnmmdpxh"><path class="upjum084b"/><path class="x2ffp0lub"/></g>`,
		"fallback": "uix-sharp:cake-candles-trio",
	});
}

export default Component;
