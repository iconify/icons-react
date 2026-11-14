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

.i1hkdem9o {
  d: path("M8 19h3l2.5-4l2.5 4");
}

.lvbxx0jiq {
  d: path("M2.5 21.5v-10a9.5 9.5 0 0 1 19 0v10");
}

.poexc2ozb {
  d: path("M5.5 19a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m8 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0");
}
</style><g class="hntgybcog"><path class="lvbxx0jiq"/><path class="poexc2ozb"/><path class="i1hkdem9o"/></g>`,
		"fallback": "uix:bike-hangar",
	});
}

export default Component;
