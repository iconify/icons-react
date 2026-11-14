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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wxoo7k3or {
  d: path("M4 6a2.5 2.5 0 0 1 2.5-2.5h11A2.5 2.5 0 0 1 20 6v8a2.5 2.5 0 0 1-2.5 2.5H11L7 20v-3.5h-.5A2.5 2.5 0 0 1 4 14Z");
}

.xkjpb-kwk {
  d: path("M12 13.5c-1.75-1.75-2.75-3-2.75-4.5a2.75 2.75 0 0 1 5.5 0c0 1.5-1 2.75-2.75 4.5Z");
}
</style><g class="ulnmmdpxh"><path class="wxoo7k3or"/><path class="xkjpb-kwk"/></g>`,
		"fallback": "uix-sharp:chat-pin",
	});
}

export default Component;
