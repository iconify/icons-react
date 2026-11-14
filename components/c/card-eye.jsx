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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vr1v17bst {
  d: path("M15 18q1.5-2.25 3-2.25T21 18q-1.5 2.25-3 2.25T15 18Zm3 0h.01");
}

.yc3wb8f3r {
  d: path("M12.3 19H2.5V5h19v9.3m-19-4.8h19m-19 0h19M6 15h2.5");
}
</style><g class="ulnmmdpxh"><path class="yc3wb8f3r"/><path class="vr1v17bst"/></g>`,
		"fallback": "uix-sharp:card-eye",
	});
}

export default Component;
