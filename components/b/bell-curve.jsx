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
		"content": `<style>.zaqm5tbek {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 17C6.25 17 7.5 4.25 12 4.25S17.75 17 21.25 17m-18.5 3.25h18.5M12 8v9.25");
}
</style><path class="zaqm5tbek"/>`,
		"fallback": "iconoven:bell-curve",
	});
}

export default Component;
