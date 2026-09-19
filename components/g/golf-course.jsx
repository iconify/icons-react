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
		"content": `<style>.w01xx4bie {
  cx: 19.5px;
  cy: 19.5px;
  r: 1.5px;
  fill: currentColor;
}

.wdq3wrgdn {
  fill: currentColor;
  d: path("M17 5.92L9 2v18H7v-1.73c-1.79.35-3 .99-3 1.73c0 1.1 2.69 2 6 2s6-.9 6-2c0-.99-2.16-1.81-5-1.97V8.98z");
}
</style><circle class="w01xx4bie"/><path class="wdq3wrgdn"/>`,
		"fallback": "ic:golf-course",
	});
}

export default Component;
