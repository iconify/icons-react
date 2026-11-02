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
		"content": `<style>.n0f0hbclg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0m9-9a2 2 0 1 0 0 4m-3 3h.01M15 10h.01M8 15a5.657 5.657 0 0 0 8 0");
}
</style><path class="n0f0hbclg"/>`,
		"fallback": "coolicons:baby-round",
	});
}

export default Component;
