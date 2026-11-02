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
		"content": `<style>.ya691tbqw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 7H6v3l-2 2l2 2v3h2m8-10h2v3l2 2l-2 2v3h-2");
}
</style><path class="ya691tbqw"/>`,
		"fallback": "coolicons:braces-sharp",
	});
}

export default Component;
