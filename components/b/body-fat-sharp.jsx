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
		"content": `<style>.cab6d98hu {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9.75 12.5h.01m4.49 4.5h.01");
}

.iuw6ymphm {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.75c3.5 4 6.75 7.75 6.75 11.5a6.75 6.75 0 0 1-13.5 0c0-3.75 3.25-7.5 6.75-11.5ZM9.75 17l4.5-4.5");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="iuw6ymphm"/><path class="cab6d98hu"/></g>`,
		"fallback": "iconoven:body-fat-sharp",
	});
}

export default Component;
