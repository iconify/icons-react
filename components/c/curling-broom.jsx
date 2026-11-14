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
		"content": `<style>.zo-sfcbvp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.5v10m-2.17 0h4.34a1.75 1.75 0 0 1 1.686 1.282l1.528 5.5a1.75 1.75 0 0 1-1.686 2.218H8.302a1.75 1.75 0 0 1-1.686-2.218l1.528-5.5A1.75 1.75 0 0 1 9.83 12.5m-.33 4h5");
}
</style><path class="zo-sfcbvp"/>`,
		"fallback": "uix:curling-broom",
	});
}

export default Component;
