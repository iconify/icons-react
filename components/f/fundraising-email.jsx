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
		"content": `<style>.hneliqdkn {
  d: path("M2.5 4h19v16h-19Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x81vj8blb {
  d: path("m5 4l7 5.5L19 4m-7 13.5L9.5 15a1.77 1.77 0 0 1 2.5-2.5a1.77 1.77 0 0 1 2.5 2.5Z");
}
</style><g class="ulnmmdpxh"><path class="hneliqdkn"/><path class="x81vj8blb"/></g>`,
		"fallback": "uix-sharp:fundraising-email",
	});
}

export default Component;
