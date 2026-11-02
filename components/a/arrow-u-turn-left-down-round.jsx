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
		"content": `<style>.t8bof-icw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m5 17l4 4l4-4m-4 4V7a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v6");
}
</style><path class="t8bof-icw"/>`,
		"fallback": "coolicons:arrow-u-turn-left-down-round",
	});
}

export default Component;
