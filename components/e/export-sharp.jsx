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
		"content": `<style>.fpg7zmb9e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 7H3v14h18V7h-2m-4-1l-3-3l-3 3m3-3v12");
}
</style><path class="fpg7zmb9e"/>`,
		"fallback": "coolicons:export-sharp",
	});
}

export default Component;
