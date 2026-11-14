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
		"content": `<style>.a8f9typpk {
  d: path("M7 12.75L4.5 4.5l5.5 8m0 0L14 4l.5 8.25");
}

.j2zlxj4wd {
  d: path("M7.5 14.75v6.75m-3-8.5l16-1.5C16 16 9 16.5 4.5 13Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="j2zlxj4wd"/><path class="a8f9typpk"/></g>`,
		"fallback": "uix-sharp:bird-of-paradise-plant",
	});
}

export default Component;
