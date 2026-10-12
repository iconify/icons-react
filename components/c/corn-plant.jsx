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
		"content": `<style>.c5irxcbeb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.75c2 0 3.25 2.75 3.25 6.5v2a3.25 3.25 0 0 1-6.5 0v-2c0-3.75 1.25-6.5 3.25-6.5M9.05 6.5h5.9m-6.2 2.75h6.5M8.85 12h6.3M12 21.25C8.75 21.25 6.25 19 5.75 15c2.75.5 5 2 6.25 4.25C13.25 17 15.5 15.5 18.25 15c-.5 4-3 6.25-6.25 6.25");
}
</style><path class="c5irxcbeb"/>`,
		"fallback": "iconoven:corn-plant",
	});
}

export default Component;
