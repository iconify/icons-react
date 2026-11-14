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
		"content": `<style>.bos09op3c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m7.5 7l-5 5l5 5m9-10l5 5l-5 5M12 8.5v7m-3-5.25l6 3.5m0-3.5l-6 3.5");
}
</style><path class="bos09op3c"/>`,
		"fallback": "uix:code-obfuscated",
	});
}

export default Component;
