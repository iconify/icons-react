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
		"content": `<style>.pacwupxqz {
  d: path("M5.5 5.5h13v13h-13Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wdvbn4b7e {
  d: path("m9 12.25l2 2l4-4M9.5 2.5v3m5-3v3m-5 13v3m5-3v3m-12-12h3m-3 5h3m13-5h3m-3 5h3");
}
</style><g class="ulnmmdpxh"><path class="pacwupxqz"/><path class="wdvbn4b7e"/></g>`,
		"fallback": "uix-sharp:cpu-check",
	});
}

export default Component;
