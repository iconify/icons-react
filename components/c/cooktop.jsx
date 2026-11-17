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
		"content": `<style>.rm3ufacgj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm3 3a2 2 0 1 1 4 0m0 0a2 2 0 1 1-4 0m8 0a2 2 0 1 1 4 0m0 0a2 2 0 1 1-4 0m-8 8a2 2 0 1 1 4 0m0 0a2 2 0 1 1-4 0m8 0a2 2 0 1 1 4 0m0 0a2 2 0 1 1-4 0");
}
</style><path class="rm3ufacgj"/>`,
		"fallback": "coolicons:cooktop",
	});
}

export default Component;
