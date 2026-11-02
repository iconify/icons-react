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
		"content": `<style>.a7aigu9mm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 3h14v18H5Zm5 3h4m-4 6a2 2 0 1 0 4 0a2 2 0 0 0-4 0m-1 9a3 3 0 0 1 6 0");
}
</style><path class="a7aigu9mm"/>`,
		"fallback": "coolicons:id-badge-sharp",
	});
}

export default Component;
