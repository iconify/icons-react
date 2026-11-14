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
		"content": `<style>.z8tpfibfn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.5 12h.01M14 9.25a3.5 3.5 0 0 1 0 5.5m-4 0a3.5 3.5 0 0 1 0-5.5m6.5-2.75a8.5 8.5 0 0 1 0 11M3.5 16a8.5 8.5 0 0 1 0-8m16.75-1.75a13.5 13.5 0 0 1 0 11.5");
}
</style><path class="z8tpfibfn"/>`,
		"fallback": "uix:doppler-effect",
	});
}

export default Component;
