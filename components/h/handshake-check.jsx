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
		"content": `<style>.e6c5vpgzq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 6h5l3-2H14l3.5 2.5h4m-19 6H6l4.5 3H13l1.433-1.075m.4-.3L17 12.5h3.292M5 6v6.5m14-6v6m-10.5-4l3 3M12 7l3 3m-.25 8l2 2L21 15.75");
}
</style><path class="e6c5vpgzq"/>`,
		"fallback": "uix-sharp:handshake-check",
	});
}

export default Component;
