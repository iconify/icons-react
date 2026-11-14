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

.xikcf4biq {
  d: path("M7 12.25h1v1H7Zm5 .5h.01m3.99-.5h1v1h-1Zm-8.5 4.5h.01m3.99-.5h1v1h-1Zm5 .5h.01");
}

.zcf8zab5y {
  d: path("M3.5 4.5h17v16h-17Zm4.5-2v4m8-4v4M3.5 9h17");
}
</style><g class="ulnmmdpxh"><path class="zcf8zab5y"/><path class="xikcf4biq"/></g>`,
		"fallback": "uix-sharp:chart-calendar-heatmap",
	});
}

export default Component;
