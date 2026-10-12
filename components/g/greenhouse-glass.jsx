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
		"content": `<style>.ddsu_abbo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 20.5v-9q0-.75.6-1.2l8.05-6.1q.6-.45 1.2 0l8.05 6.1q.6.45.6 1.2v9q0 .75-.75.75h-17q-.75 0-.75-.75m5.5-12.9v13.65m7.5-13.65v13.65m-13-7h5.5m7.5 0h5.5");
}
</style><path class="ddsu_abbo"/>`,
		"fallback": "iconoven:greenhouse-glass",
	});
}

export default Component;
