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
		"content": `<style>.bdlfycban {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 3za3 3 0 0 1 3 3v12.5a3 3 0 0 1-3 3a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3M2.5 7H9m6 0h6.5M12 3v6.5M9 13h6");
}
</style><path class="bdlfycban"/>`,
		"fallback": "uix:clothes-peg",
	});
}

export default Component;
