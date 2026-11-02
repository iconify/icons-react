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
		"content": `<style>.ckp8_gbno {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 18H3V5h14v13h-5M7 9h6v4H7Zm1 9a2 2 0 1 0 4 0a2 2 0 0 0-4 0m9-3h4");
}
</style><path class="ckp8_gbno"/>`,
		"fallback": "coolicons:caravan-sharp",
	});
}

export default Component;
