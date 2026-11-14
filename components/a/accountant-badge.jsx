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
		"content": `<style>.d3b0drdvj {
  d: path("M13.2 19H2.5V2.5h13v7.8");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wq7zoi0-h {
  d: path("M5.5 5.5h7V9h-7Zm1 7h.01m3.99 0h.01M6.5 16h.01m3.99 0h.01m4.49-.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm1.25 2.5l-.75 3.5m4.25-3.5l.75 3.5");
}
</style><g class="ulnmmdpxh"><path class="d3b0drdvj"/><path class="wq7zoi0-h"/></g>`,
		"fallback": "uix-sharp:accountant-badge",
	});
}

export default Component;
