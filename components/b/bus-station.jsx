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
		"content": `<style>.rxut10bmw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 7H10M3.5 7v13.5M9 7v13.5m-5.5-4H9M15.5 6H18a3.5 3.5 0 0 1 3.5 3.5V15a3.5 3.5 0 0 1-3.5 3.5h-2.5A3.5 3.5 0 0 1 12 15V9.5A3.5 3.5 0 0 1 15.5 6M12 11h9.5m-7.25 4.25h.01m4.99 0h.01M14 18.5v2m5.5-2v2");
}
</style><path class="rxut10bmw"/>`,
		"fallback": "uix:bus-station",
	});
}

export default Component;
