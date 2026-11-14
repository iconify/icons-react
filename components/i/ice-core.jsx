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

.ym9vz_bku {
  d: path("M8 4.5v15a4 1.5 0 0 0 8 0v-15m-8 6L16 9m-8 7l8-2");
}

.z93kq-b6f {
  d: path("M8 4.5a4 1.5 0 1 0 8 0a4 1.5 0 1 0-8 0");
}
</style><g class="hntgybcog"><path class="z93kq-b6f"/><path class="ym9vz_bku"/></g>`,
		"fallback": "uix:ice-core",
	});
}

export default Component;
