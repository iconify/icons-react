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
		"content": `<style>.i7yvu49nq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M14 17v4h6V10l-8-7l-8 7v11h6v-4a2 2 0 1 1 4 0");
}
</style><path class="i7yvu49nq"/>`,
		"fallback": "coolicons:house-alt-1-sharp",
	});
}

export default Component;
