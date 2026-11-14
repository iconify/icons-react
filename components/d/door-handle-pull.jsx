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
		"content": `<style>.s_-mj0rqn {
  d: path("M6 21.5v-17a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v17m-14.5 0h17");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wm948pixd {
  d: path("M13 7.5h1.75v9H13");
}
</style><g class="ulnmmdpxh"><path class="s_-mj0rqn"/><path class="wm948pixd"/></g>`,
		"fallback": "uix-sharp:door-handle-pull",
	});
}

export default Component;
