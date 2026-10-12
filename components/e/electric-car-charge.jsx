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
		"content": `<style>.f7ev2z_cy {
  d: path("M12.75 12.75L11 15.5h2.25l-1.75 2.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wy062sb2y {
  d: path("M3.75 13a1 1 0 0 1 1-1h.6L7 7.15a2 2 0 0 1 1.9-1.4h6.2a2 2 0 0 1 1.9 1.4L18.65 12h.6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H4.75a1 1 0 0 1-1-1Zm2.75 6v2m11-2v2m-12-9h13");
}
</style><g class="hntgybcog"><path class="wy062sb2y"/><path class="f7ev2z_cy"/></g>`,
		"fallback": "iconoven:electric-car-charge",
	});
}

export default Component;
