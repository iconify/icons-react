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
		"content": `<style>.gfekwiynr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.5v6m-7.5 12V17l4-4L12 8.5l3.5 4.5l4 4v3.5M8.5 13l1 5.5m6-5.5l-1 5.5");
}
</style><path class="gfekwiynr"/>`,
		"fallback": "uix:bronchi",
	});
}

export default Component;
