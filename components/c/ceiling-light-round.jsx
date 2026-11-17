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
		"content": `<style>.obrj3vb1a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 16a9 9 0 0 1 18 0Zm9-13v4m4 9a4 4 0 1 1-8 0");
}
</style><path class="obrj3vb1a"/>`,
		"fallback": "coolicons:ceiling-light-round",
	});
}

export default Component;
