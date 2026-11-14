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
		"content": `<style>.bihy412yv {
  fill: currentColor;
  d: path("M4.5 3.5h3.75v3.75H4.5Zm7.5 0h3.75v3.75H12ZM8.25 7.25H12V11H8.25Zm7.5 0h3.75V11h-3.75Z");
}

.r313cdkgi {
  d: path("M4.5 2.5v19m0-18h15V11h-15Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="r313cdkgi"/><path class="bihy412yv"/></g>`,
		"fallback": "uix-sharp:agile-sprint",
	});
}

export default Component;
