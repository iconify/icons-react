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
		"content": `<style>.kexu5q5el {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 3c2 3.5 5.5 5.5 5.5 9.5a5.5 5.5 0 0 1-11 0c0-3 1.5-5 3-6c0 2.5.75 3.5 1.75 4c-.5-3-.25-5 .75-7.5ZM7 21h10");
}
</style><path class="kexu5q5el"/>`,
		"fallback": "uix-sharp:combustion",
	});
}

export default Component;
