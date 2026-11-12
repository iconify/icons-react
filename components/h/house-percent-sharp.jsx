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
		"content": `<style>.gxgawpk5w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m16 7l4 4v10H4V11l8-8zm-2 5l-4 4m0-4h.01M14 16h.01");
}
</style><path class="gxgawpk5w"/>`,
		"fallback": "coolicons:house-percent-sharp",
	});
}

export default Component;
