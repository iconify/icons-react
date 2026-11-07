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
		"content": `<style>.ecd9x6bhy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M14.049 3.236C8.403 1.916 3 6.202 3 12a9 9 0 0 0 9 9c5.798 0 10.084-5.403 8.764-11.049M9 9h.01M15 9h.01M8 14a5.657 5.657 0 0 0 8 0m2-10h4m-2-2v4");
}
</style><path class="ecd9x6bhy"/>`,
		"fallback": "coolicons:face-smile-plus-corner",
	});
}

export default Component;
