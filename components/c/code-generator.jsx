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
		"content": `<style>.b1rmupb0u {
  d: path("M13.3 19H3V2.5h13v10.8");
}

.ovu6qstmq {
  d: path("m8 8l-2.25 2.5L8 13m3-5l2.25 2.5L11 13m6.75.75q.5 3.5 4 4q-3.5.5-4 4q-.5-3.5-4-4q3.5-.5 4-4Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="b1rmupb0u"/><path class="ovu6qstmq"/></g>`,
		"fallback": "uix-sharp:code-generator",
	});
}

export default Component;
