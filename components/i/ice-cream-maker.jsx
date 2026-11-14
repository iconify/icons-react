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
		"content": `<style>.v88bj3bmr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 15.5h18V21H3Zm3.5 0V6h11v9.5M5 6h14m-8.5-3h3M12 3v3m0 12.25h.01");
}
</style><path class="v88bj3bmr"/>`,
		"fallback": "uix-sharp:ice-cream-maker",
	});
}

export default Component;
