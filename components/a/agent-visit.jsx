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
		"content": `<style>.ke58ybbzd {
  d: path("M3.5 10.5L12 3.25l8.5 7.25v10h-17Z");
}

.qw5gsbcga {
  d: path("M10 11.25a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM8.5 20.5C8.5 17.75 10 16 12 16s3.5 1.75 3.5 4.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ke58ybbzd"/><path class="qw5gsbcga"/></g>`,
		"fallback": "uix-sharp:agent-visit",
	});
}

export default Component;
