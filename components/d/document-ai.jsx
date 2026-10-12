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

.q-0cd-kli {
  d: path("M6.25 2.75H12q2 0 3.41 1.41l2.93 2.93q1.41 1.41 1.41 3.41v8.75q0 2-2 2H6.25q-2 0-2-2V4.75q0-2 2-2");
}

.y_9p0ublb {
  d: path("M13.75 3v5.25h5.75M12 10.5q.48 3.52 4 4q-3.52.48-4 4q-.48-3.52-4-4q3.52-.48 4-4");
}
</style><g class="hntgybcog"><path class="q-0cd-kli"/><path class="y_9p0ublb"/></g>`,
		"fallback": "iconoven:document-ai",
	});
}

export default Component;
