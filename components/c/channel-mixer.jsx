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
		"content": `<style>.cg04wdbau {
  d: path("M10.5 14.75a5.25 5.25 0 1 0 10.5 0a5.25 5.25 0 1 0-10.5 0");
}

.ddp8knnno {
  d: path("M6.75 8.25a5.25 5.25 0 1 0 10.5 0a5.25 5.25 0 1 0-10.5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jw1uorb3e {
  d: path("M3 14.75a5.25 5.25 0 1 0 10.5 0a5.25 5.25 0 1 0-10.5 0");
}
</style><g class="hntgybcog"><path class="ddp8knnno"/><path class="jw1uorb3e"/><path class="cg04wdbau"/></g>`,
		"fallback": "uix:channel-mixer",
	});
}

export default Component;
