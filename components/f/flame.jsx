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
		"content": `<style>.tst8xobur {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 3c.5 2.5 2 4.5 4 6c1.5 1.5 2 3.5 2 6a6 6 0 1 1-12 0c0-1.5.5-2.5 1-3m0 0a2 2 0 1 0 4 0c0-1.5-.5-2-1-3c-1-2-.5-4 2-6");
}
</style><path class="tst8xobur"/>`,
		"fallback": "coolicons:flame",
	});
}

export default Component;
