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
		"content": `<style>.e3dol68is {
  d: path("M15 11v3");
}

.i_dzdib_s {
  d: path("M9 9v5");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.x2tju3bnd {
  d: path("M12 7v7");
}

.ymp2b4b6u {
  d: path("M15 5h5v8l-8 8 -8 -8V5h5");
}
</style><g class="s0phu2bbs"><path class="ymp2b4b6u"/><path class="i_dzdib_s"/><path class="x2tju3bnd"/><path class="e3dol68is"/></g>`,
		"fallback": "iconmind:capability-eval-outline-bold",
	});
}

export default Component;
