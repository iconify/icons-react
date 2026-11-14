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
		"content": `<style>.ia8hz-bad {
  d: path("M6 18.5q6-6 12 0m-6-5.75V9m-9.5 7.75H6v3.5H2.5Zm15.5 0h3.5v3.5H18Z");
}

.r0rc08b0c {
  d: path("m12 12.75l-3.5-5l1.5-4h4l1.5 4Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="r0rc08b0c"/><path class="ia8hz-bad"/></g>`,
		"fallback": "uix-sharp:designer",
	});
}

export default Component;
