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
		"content": `<style>.g29pwpzzq {
  d: path("M12 6.5C14.5 9 16.5 11 16.5 14a4.5 4.5 0 0 1-9 0c0-2 1-3.5 2.25-4.5c.25 1.5 1 2.5 2 2.75c-.5-2.25-.5-4.25.25-5.75Z");
}

.q2li-tkqb {
  d: path("M4.5 2.5h15a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2v-15a2 2 0 0 1 2-2Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="q2li-tkqb"/><path class="g29pwpzzq"/></g>`,
		"fallback": "uix-sharp:fire-class-abc",
	});
}

export default Component;
