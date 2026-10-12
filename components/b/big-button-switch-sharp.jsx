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
		"content": `<style>.zjwk3x5es {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 15.25h.75a6.5 6.5 0 0 1 13 0h2.75v6H2.75v-6zm.75 0h13M12 2.75V6.5m-2-2l2 2l2-2");
}
</style><path class="zjwk3x5es"/>`,
		"fallback": "iconoven:big-button-switch-sharp",
	});
}

export default Component;
