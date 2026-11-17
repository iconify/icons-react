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
		"content": `<style>.r-0-39u8q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 6H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h1m6 0a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2m0 0a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2m6-2h2a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h2");
}
</style><path class="r-0-39u8q"/>`,
		"fallback": "coolicons:co2-duotone-round",
	});
}

export default Component;
