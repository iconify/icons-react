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
		"content": `<style>.j9mpubb9t {
  d: path("m12 6 2.5 2.5a2.5 2.5 0 0 1 -5 0Z");
}

.jwnes9bsk {
  d: path("M8 19h8");
}

.oqj-o0b2r {
  d: path("M5 14h14");
}

.p-6v8o44a {
  fill: currentColor;
  d: path("m12 6 2.5 2.5a2.5 2.5 0 0 1 -5 0Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="p-6v8o44a"/><path class="j9mpubb9t"/><path class="oqj-o0b2r"/><path class="jwnes9bsk"/></g>`,
		"fallback": "iconmind:humidity-low-duotone-bold",
	});
}

export default Component;
