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
		"content": `<style>.my_b0go6c {
  d: path("M14.9 21H3.5V4.5h17v10.4M8 2.5v4m8-4v4m-12.5 3h17m-13 4h.01m4.49 0h.01m-4.51 4h.01m4.49 0h.01");
}

.t2_i6wh2n {
  d: path("M18.25 15q0 3.25 3.25 3.25q-3.25 0-3.25 3.25q0-3.25-3.25-3.25q3.25 0 3.25-3.25Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="my_b0go6c"/><path class="t2_i6wh2n"/></g>`,
		"fallback": "uix-sharp:cleaning-schedule",
	});
}

export default Component;
