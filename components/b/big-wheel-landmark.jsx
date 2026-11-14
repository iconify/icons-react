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
		"content": `<style>.a_2a6vn6e {
  d: path("M10.5 10a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0M12 2.5v15M4.5 10h15");
}

.czu33icqx {
  d: path("M4.5 10a7.5 7.5 0 1 0 15 0a7.5 7.5 0 1 0-15 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v4gve_jid {
  d: path("m8 21l4-11l4 11");
}
</style><g class="hntgybcog"><path class="czu33icqx"/><path class="a_2a6vn6e"/><path class="v4gve_jid"/></g>`,
		"fallback": "uix:big-wheel-landmark",
	});
}

export default Component;
