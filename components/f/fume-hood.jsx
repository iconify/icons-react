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
		"content": `<style>.dwav2fbqx {
  width: 16.5px;
  height: 14.5px;
  x: 3.75px;
  y: 6.75px;
  rx: 2.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i5xj3sbti {
  d: path("M9.5 6.75v-3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3Zm-1.75 3h8.5a1 1 0 0 1 1 1v6.5a1 1 0 0 1-1 1h-8.5a1 1 0 0 1-1-1v-6.5a1 1 0 0 1 1-1");
}

.z0lfm0btn {
  d: path("M12 15.25c-.75-.6.75-1.15 0-1.75s.75-1.15 0-1.75");
}
</style><g class="hntgybcog"><rect class="dwav2fbqx"/><path class="i5xj3sbti"/><path class="z0lfm0btn"/></g>`,
		"fallback": "iconoven:fume-hood",
	});
}

export default Component;
