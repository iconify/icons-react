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
		"content": `<style>.d20wu7byv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 8.25v3m4-6v9M12 2.5V17m4-11.25v8m4-5.5v3M3 20.5h18");
}
</style><path class="d20wu7byv"/>`,
		"fallback": "uix-sharp:audio-track",
	});
}

export default Component;
