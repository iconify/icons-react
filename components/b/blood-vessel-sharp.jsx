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
		"content": `<style>.agzn98nil {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 8.5c4 0 6-2 9.25-2s5.25 2 9.25 2m-18.5 7c4 0 6-2 9.25-2s5.25 2 9.25 2");
}

.aw18wcbea {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6.5 12h.01M12 10h.01m5.49 2h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="agzn98nil"/><path class="aw18wcbea"/></g>`,
		"fallback": "iconoven:blood-vessel-sharp",
	});
}

export default Component;
