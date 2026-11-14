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
		"content": `<style>.bmborbbpd {
  d: path("M12.25 16.25h-3a1.5 1.5 0 0 1-1.5-1.5v-5.5a1.5 1.5 0 0 1 1.5-1.5h5.5a1.5 1.5 0 0 1 1.5 1.5v3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k6yjb7b_t {
  fill: currentColor;
  d: path("M14.875 12.25h3.25a2.625 2.625 0 0 1 2.625 2.625v3.25a2.625 2.625 0 0 1-2.625 2.625h-3.25a2.625 2.625 0 0 1-2.625-2.625v-3.25a2.625 2.625 0 0 1 2.625-2.625");
}

.zvvr-_bsq {
  d: path("M7.75 11.75h-3a1.5 1.5 0 0 1-1.5-1.5v-5.5a1.5 1.5 0 0 1 1.5-1.5h5.5a1.5 1.5 0 0 1 1.5 1.5v3");
}
</style><g class="hntgybcog"><path class="zvvr-_bsq"/><path class="bmborbbpd"/><path class="k6yjb7b_t"/></g>`,
		"fallback": "uix:bring-to-front",
	});
}

export default Component;
