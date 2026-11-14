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
		"content": `<style>.m6ysksbjq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.572 20.5H4c-.6 0-1-.4-1-1c0-3.25 3.25-5.5 7.5-5.5q.865 0 1.666.121M6.5 7a4 4 0 1 0 8 0a4 4 0 1 0-8 0Zm11.75 7.5l3.25 1.25v2.5c0 2-1.5 3-3.25 3.75c-1.75-.75-3.25-1.75-3.25-3.75v-2.5Z");
}
</style><path class="m6ysksbjq"/>`,
		"fallback": "uix-sharp:immune-system-bio",
	});
}

export default Component;
