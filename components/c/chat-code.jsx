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
		"content": `<style>.kgm_fob_y {
  d: path("M9 7.5L7 10l2 2.5M12.75 7l-1.5 6M15 7.5l2 2.5l-2 2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wxoo7k3or {
  d: path("M4 6a2.5 2.5 0 0 1 2.5-2.5h11A2.5 2.5 0 0 1 20 6v8a2.5 2.5 0 0 1-2.5 2.5H11L7 20v-3.5h-.5A2.5 2.5 0 0 1 4 14Z");
}
</style><g class="ulnmmdpxh"><path class="wxoo7k3or"/><path class="kgm_fob_y"/></g>`,
		"fallback": "uix-sharp:chat-code",
	});
}

export default Component;
