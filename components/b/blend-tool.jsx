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
		"content": `<style>.n1s68xbol {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 18.25a3 3 0 1 0 6 0a3 3 0 1 0-6 0M12 9.5za2.5 2.5 0 0 1 2.5 2.5a2.5 2.5 0 0 1-2.5 2.5A2.5 2.5 0 0 1 9.5 12A2.5 2.5 0 0 1 12 9.5m5.5-7h2.25a1.75 1.75 0 0 1 1.75 1.75V6.5a1.75 1.75 0 0 1-1.75 1.75H17.5a1.75 1.75 0 0 1-1.75-1.75V4.25A1.75 1.75 0 0 1 17.5 2.5");
}
</style><path class="n1s68xbol"/>`,
		"fallback": "uix:blend-tool",
	});
}

export default Component;
