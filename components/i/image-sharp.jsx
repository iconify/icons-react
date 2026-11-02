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
		"content": `<style>.oesm2zxdd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 3h18v18H3Zm0 14l6-6l5 5l3-3l4 4m-7-9a1 1 0 1 0 2 0a1 1 0 0 0-2 0");
}
</style><path class="oesm2zxdd"/>`,
		"fallback": "coolicons:image-sharp",
	});
}

export default Component;
