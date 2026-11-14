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
		"content": `<style>.bs9oe1ajk {
  d: path("m4.508 13.232l6.691-4.226a1.5 1.5 0 0 1 1.602 0l6.691 4.226a1.5 1.5 0 0 1 0 2.536l-6.691 4.226a1.5 1.5 0 0 1-1.602 0l-6.691-4.226a1.5 1.5 0 0 1 0-2.536");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rnxct9jcs {
  d: path("M2.5 14.5V10L12 4l9.5 6v4.5M12 4v4.5m-4.75 3l4.75 3");
}
</style><g class="hntgybcog"><path class="bs9oe1ajk"/><path class="rnxct9jcs"/></g>`,
		"fallback": "uix:floor-plan-3d",
	});
}

export default Component;
