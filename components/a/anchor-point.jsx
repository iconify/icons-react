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
		"content": `<style>.arryqdnhm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 15.5h15.5a1.75 1.75 0 0 1 1.75 1.75v1A1.75 1.75 0 0 1 19.75 20H4.25a1.75 1.75 0 0 1-1.75-1.75v-1a1.75 1.75 0 0 1 1.75-1.75M6.75 8a5.25 5.25 0 1 0 10.5 0a5.25 5.25 0 1 0-10.5 0M12 13.25v2.25");
}
</style><path class="arryqdnhm"/>`,
		"fallback": "uix:anchor-point",
	});
}

export default Component;
