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
		"content": `<style>.j8dptfx6y {
  d: path("M5.25 7.75v-2.5h13v13.5h-2.5");
}

.lb_gfvkvo {
  d: path("M2.75 7.75h13v13.5h-13zm3 0v13.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zwfxj2-ok {
  d: path("M7.75 5.25v-2.5h13v13.5h-2.5");
}
</style><g class="x2cwu0gfd"><path class="zwfxj2-ok"/><path class="j8dptfx6y"/><path class="lb_gfvkvo"/></g>`,
		"fallback": "iconoven:game-library-sharp",
	});
}

export default Component;
