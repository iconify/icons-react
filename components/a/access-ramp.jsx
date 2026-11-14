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
		"content": `<style>.i70b4acue {
  d: path("M7 15.5v-4L13 7v4");
}

.okkn7y67n {
  d: path("M2.5 18.5h19M3 18.5l12-9h6v9");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="okkn7y67n"/><path class="i70b4acue"/></g>`,
		"fallback": "uix-sharp:access-ramp",
	});
}

export default Component;
