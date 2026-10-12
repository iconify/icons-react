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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.n4mel8buu {
  d: path("M6.5 10h4v4h-4Zm0-6.75v3.5m4-3.5v3.5m-4 10.5v3.5m4-3.5v3.5m5.75-15.5a1.75 1.75 0 0 1 3.5 0v9.1a3 3 0 1 1-3.5 0Z");
}

.o0ljsub3u {
  width: 10.5px;
  height: 10.5px;
  x: 3.25px;
  y: 6.75px;
  rx: 2px;
}
</style><g class="hntgybcog"><rect class="o0ljsub3u"/><path class="n4mel8buu"/></g>`,
		"fallback": "iconoven:gpu-temp",
	});
}

export default Component;
