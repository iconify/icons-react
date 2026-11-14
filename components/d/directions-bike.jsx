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
		"content": `<style>.dkp69i6sc {
  d: path("M2 15a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0m13 0a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0");
}

.gydn1smjn {
  d: path("M5.5 15L9 8.5h6l3.5 6.5m-13 0H12L9 8.5m3 6.5l3-6.5m0 0l-.75-3h2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="dkp69i6sc"/><path class="gydn1smjn"/></g>`,
		"fallback": "uix:directions-bike",
	});
}

export default Component;
