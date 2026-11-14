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

.uj2oiop0t {
  d: path("M15.75 18.75v3l1.75-1l1.75 1v-3");
}

.z_401d-ab {
  d: path("M14.75 16.75a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0");
}

.z5s4qzbwl {
  d: path("M21 12.422V2.5c-3-.25-7 .25-9 1.5c-2-1.25-6-1.75-9-1.5V15c2.995-.25 6.986.248 8.99 1.494M12 4v12.5");
}
</style><g class="hntgybcog"><path class="z5s4qzbwl"/><path class="z_401d-ab"/><path class="uj2oiop0t"/></g>`,
		"fallback": "uix:court-clerk",
	});
}

export default Component;
