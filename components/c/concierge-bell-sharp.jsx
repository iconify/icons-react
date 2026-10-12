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
		"content": `<style>.d3yh5cbqf {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 4.5h.01");
}

.lyiwtozlh {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.45 14.62a5.25 5.25 0 0 1 2.75-2.3m-7.45 7.93h18.5");
}

.pp4rsab7v {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 5.5v3.75m-8 8a8 8 0 0 1 16 0Z");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="d3yh5cbqf"/><path class="pp4rsab7v"/><path class="lyiwtozlh"/></g>`,
		"fallback": "iconoven:concierge-bell-sharp",
	});
}

export default Component;
