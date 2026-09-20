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
		"content": `<style>.d6cu3qpew {
  d: path("M17 3h4v18h-4");
}

.e84lw4bzo {
  d: path("M12 10v5.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ldodvk1_f {
  d: path("M7 3H3v18h4");
}

.ri_favbdz {
  d: path("M9.5 12.5 12 10l2.5 2.5");
}
</style><g class="hntgybcog"><path class="ldodvk1_f"/><path class="d6cu3qpew"/><path class="e84lw4bzo"/><path class="ri_favbdz"/></g>`,
		"fallback": "iconmind:http-post-outline-thin",
	});
}

export default Component;
