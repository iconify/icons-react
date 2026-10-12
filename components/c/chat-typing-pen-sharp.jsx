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
		"content": `<style>.m1rfqibyq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 6.25v-2.5h18.5v14H12.5L8 20.85l-1.25 1v-4.1h-4v-2.5Zm4.5 2.25h9.5m-9.5 4.25h5m2-1.75v3.5M13.5 11H15m-1.5 3.5H15");
}
</style><path class="m1rfqibyq"/>`,
		"fallback": "iconoven:chat-typing-pen-sharp",
	});
}

export default Component;
