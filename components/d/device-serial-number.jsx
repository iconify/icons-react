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
		"content": `<style>.qqmo89-bw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 5.5h11A3.5 3.5 0 0 1 21 9v6a3.5 3.5 0 0 1-3.5 3.5h-11A3.5 3.5 0 0 1 3 15V9a3.5 3.5 0 0 1 3.5-3.5m0 3.5v6m3-6v6M12 9v6m3-6v6m2.5-6v6");
}
</style><path class="qqmo89-bw"/>`,
		"fallback": "uix:device-serial-number",
	});
}

export default Component;
