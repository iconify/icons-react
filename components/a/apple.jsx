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
		"content": `<style>.heq5vh7hp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 10a5 5 0 0 1 8 4c0 3.5-2 7-5 7c-1 0-2-1-3-1s-2 1-3 1c-3 0-5-3.5-5-7a5 5 0 0 1 8-4m0 0V6m0 0c.325-2.175 3.483-3.267 7-2c-2.317 2.933-5.575 3.675-7 2");
}
</style><path class="heq5vh7hp"/>`,
		"fallback": "coolicons:apple",
	});
}

export default Component;
