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
		"content": `<style>.blk5dqbzm {
  d: path("M10.5 14.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm1.5-4h.01m3.99 4h.01m-4.01 4h.01M8 14.5h.01");
}

.rxmk0tb-t {
  d: path("m6 2.5l3.5 2.25h5L18 2.5m-6 2.25V7.5m-7 7a7 7 0 1 0 14 0a7 7 0 1 0-14 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="rxmk0tb-t"/><path class="blk5dqbzm"/></g>`,
		"fallback": "uix-sharp:hidden-disability-lanyard",
	});
}

export default Component;
