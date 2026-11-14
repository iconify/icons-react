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
		"content": `<style>.lk14jwbpy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 2.5h14v19L16.75 20l-2.25 1.5L12 20l-2.5 1.5L7.25 20L5 21.5ZM7.75 7h2.5M9 5.75v2.5M12.5 7H16m-8.25 4.5h2.5m2.25 0H16M7.75 16h2.5M9 14.75v2.5M12.5 16H16");
}
</style><path class="lk14jwbpy"/>`,
		"fallback": "uix:atm-mini-statement",
	});
}

export default Component;
