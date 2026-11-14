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
		"content": `<style>.o_tvdkr8v {
  d: path("M5.5 15a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0Zm9-1.75h4m-4 3.5h4");
}

.qnljgeszn {
  d: path("M2.5 9h19v12h-19Zm15 0L20 3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="qnljgeszn"/><path class="o_tvdkr8v"/></g>`,
		"fallback": "uix-sharp:cb-radio",
	});
}

export default Component;
