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
		"content": `<style>.iepy8fb6h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m7 3l5 5l5-5zm-2 9h2m4 0h2m4 0h2M7 21l5-5l5 5z");
}
</style><path class="iepy8fb6h"/>`,
		"fallback": "coolicons:flip-vertical-sharp",
	});
}

export default Component;
