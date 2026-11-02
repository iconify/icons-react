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
		"content": `<style>.ckjxvubgq {
  d: path("M3 6a2 2 0 1 0 4 0a2 2 0 0 0-4 0m0 12a2 2 0 1 0 4 0a2 2 0 0 0-4 0m14 0a2 2 0 1 0 4 0a2 2 0 0 0-4 0M5 8v8");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.wenaypbnv {
  stroke-opacity: 0.4;
  d: path("M19 16V8a2 2 0 0 0-2-2h-6m3-3l-3 3l3 3");
}
</style><g class="nrj6p8qat"><path class="wenaypbnv"/><path class="ckjxvubgq"/></g>`,
		"fallback": "coolicons:git-pull-request-duocolor",
	});
}

export default Component;
