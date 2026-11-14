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
		"content": `<style>.jj8-nybnm {
  d: path("M10.75 11h2.5l1.25 7.5h-5ZM4.5 18.5h15v3h-15ZM9 3.25q1.5 3.25 0 6.5m6-6.5q-1.5 3.25 0 6.5");
}

.s5kzbc7ql {
  d: path("M7.5 6.5a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="s5kzbc7ql"/><path class="jj8-nybnm"/></g>`,
		"fallback": "uix-sharp:batting-tee",
	});
}

export default Component;
