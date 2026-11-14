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

.ytx4uxopf {
  d: path("m9 9.5l2.75 1.5v3M18 18h.01");
}

.zf4yyqbpx {
  d: path("M3 4.5h18V21H3Zm5-2v4m8-4v4m-13 3h18M3 15h18M9 9.5V21m6-11.5V21");
}
</style><g class="ulnmmdpxh"><path class="zf4yyqbpx"/><path class="ytx4uxopf"/></g>`,
		"fallback": "uix-sharp:advent-calendar",
	});
}

export default Component;
