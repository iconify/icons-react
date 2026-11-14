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
		"content": `<style>.pib9ljbgx {
  d: path("M2.5 15h19L20 20.5H4Zm1.25 0c0-4 1.25-5.5 2.75-5.5S9.25 11 9.25 15m0 0c0-4 1.25-5.5 2.75-5.5s2.75 1.5 2.75 5.5m0 0c0-4 1.25-5.5 2.75-5.5s2.75 1.5 2.75 5.5");
}

.s3_yqqbsd {
  d: path("M7.25 9.75c.25-3.5 1-5.25 2-5.25s1.75 1.75 2 5.25m1.5 0c.25-3.5 1-5.25 2-5.25s1.75 1.75 2 5.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="pib9ljbgx"/><path class="s3_yqqbsd"/></g>`,
		"fallback": "uix-sharp:egg-tray-display",
	});
}

export default Component;
