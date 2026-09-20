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
		"content": `<style>.vw51yublu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2c2 4 6 6 6 11a6 6 0 1 1 -12 0c0 -4 3 -5 3 -8 1 1 3 1 3 -3");
}
</style><path class="vw51yublu"/>`,
		"fallback": "iconmind:calories-burned-outline-thin",
	});
}

export default Component;
