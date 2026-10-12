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
		"content": `<style>.ayoxyti5v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.75v18.5M9.25 5.5h5.5m-9 4.25h12.5m-10 7.5l7.5-3");
}
</style><path class="ayoxyti5v"/>`,
		"fallback": "iconoven:cross-orthodox",
	});
}

export default Component;
