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
		"content": `<style>.oqj7jvbuv {
  d: path("M13.4 17.5H2.5V3h19v9.7");
}

.rx1c-3bte {
  d: path("M8.5 6.25q-2 0-2 2v.25q0 1.75-1.25 1.75q1.25 0 1.25 1.75v.25q0 2 2 2m6-8q2 0 2 2v.25q0 1.75 1.25 1.75q-1.25 0-1.25 1.75v.25q0 .262-.034.49M15 21l5.25-5.25m-4-.25h4.25v4.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="oqj7jvbuv"/><path class="rx1c-3bte"/></g>`,
		"fallback": "uix-sharp:api-request",
	});
}

export default Component;
