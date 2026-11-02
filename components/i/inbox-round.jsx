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
		"content": `<style>.lj2qkhw1t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 8a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Zm0 5h2c1.28 0 2.36.36 3 1l1 1c.64.64 1.72 1 3 1s2.36-.36 3-1l1-1c.64-.64 1.72-1 3-1h2");
}
</style><path class="lj2qkhw1t"/>`,
		"fallback": "coolicons:inbox-round",
	});
}

export default Component;
