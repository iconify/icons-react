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
		"content": `<style>.gpsvd7w4z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 5h6q1 0 .93 1l-.86 12.75q-.07 1-1.07 1h-4q-1 0-1.07-1L2.82 6q-.07-1 .93-1m10.5 3h6q1 0 .92 1l-.84 9.75q-.08 1-1.08 1h-4q-1 0-1.08-1L13.33 9q-.08-1 .92-1m-4.04 5h3.47");
}
</style><path class="gpsvd7w4z"/>`,
		"fallback": "iconoven:bongos",
	});
}

export default Component;
