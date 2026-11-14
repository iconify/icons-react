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
		"content": `<style>.gwb7h9w6y {
  d: path("M16.5 6.5c2.25 0 3.75 1.5 5 4");
}

.i5ab81b3e {
  fill: currentColor;
  d: path("M6.25 8.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm3-2.75a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm3 2.75a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v6wnv2mbm {
  d: path("M3.5 11.5c0-5.5 3.25-9 7-9s6.75 3.5 6.75 9Zm3.75 10V18c-2.25-1.5-3-3.5-3-3.75m12.5-.25l1.25.5q0 .75-.75.75h-.75v2c0 1-.75 1.75-1.5 1.75h-1.75v2.5");
}
</style><g class="ulnmmdpxh"><path class="v6wnv2mbm"/><path class="i5ab81b3e"/><path class="gwb7h9w6y"/></g>`,
		"fallback": "uix-sharp:eeg-cap",
	});
}

export default Component;
