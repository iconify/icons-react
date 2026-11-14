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
		"content": `<style>.is8nqnbzt {
  d: path("M16.75 14.5L18 15.75L16.75 17");
}

.o526cq8lq {
  d: path("M20.75 18.5A2.75 2.75 0 1 1 18 15.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v3dxfccso {
  d: path("M13.3 21.5H3v-17h18v10.3M8 2.5v4m8-4v4m-13 3h18");
}
</style><g class="ulnmmdpxh"><path class="v3dxfccso"/><path class="o526cq8lq"/><path class="is8nqnbzt"/></g>`,
		"fallback": "uix-sharp:change-calendar",
	});
}

export default Component;
