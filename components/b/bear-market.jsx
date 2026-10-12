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
		"content": `<style>.czvq6abqf {
  d: path("M3.75 10.5A1.25 1.25 0 0 1 5 9.25h.13a2.25 2.25 0 1 1 4.24 0h5.26a2.25 2.25 0 1 1 4.24 0H19a1.25 1.25 0 0 1 1.25 1.25v8.25a2.5 2.5 0 0 1-2.5 2.5H6.25a2.5 2.5 0 0 1-2.5-2.5Z");
}

.g2y9u263h {
  d: path("M7.5 12.75L10.75 16l2-2l3.75 3.75m0-3.25v3.25h-3.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="czvq6abqf"/><path class="g2y9u263h"/></g>`,
		"fallback": "iconoven:bear-market",
	});
}

export default Component;
