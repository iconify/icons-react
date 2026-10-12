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
		"content": `<style>.gf3cqz74i {
  d: path("M2.75 6.75v8.5m18.5-8.5v8m0-6.75h-3.5l-3-1.75a2 2 0 0 0-2.1.05L9.6 8.4a1.4 1.4 0 0 0 1.55 2.3l2.35-1.45L18 13.5h3.25M2.75 8H5.5l2.25-1.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.u-x-zbb-v {
  d: path("M2.75 14.75H5.5l2.12 2.12a1.6 1.6 0 0 0 2.25-2.25M7.75 12.5l2.47 2.47a1.6 1.6 0 0 0 2.25-2.25M10 10.25l2.65 2.65a1.6 1.6 0 0 0 2.25-2.25");
}
</style><g class="hntgybcog"><path class="gf3cqz74i"/><path class="u-x-zbb-v"/></g>`,
		"fallback": "iconoven:handshake",
	});
}

export default Component;
