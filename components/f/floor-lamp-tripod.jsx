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
		"content": `<style>.mgrlzs-ga {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.927 2.5h4.146a1.5 1.5 0 0 1 1.342.829l1.5 3A1.5 1.5 0 0 1 15.573 8.5H8.427a1.5 1.5 0 0 1-1.342-2.171l1.5-3A1.5 1.5 0 0 1 9.927 2.5M12 8.5v13m-6 0l6-6.5l6 6.5");
}
</style><path class="mgrlzs-ga"/>`,
		"fallback": "uix:floor-lamp-tripod",
	});
}

export default Component;
