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
		"content": `<style>.iha929bau {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 7V2.5m2 5.25l3.25-3M15 10h4.5m-5.25 2.25l3 3m-7.5-3l-3 3M9 10H4.5m5.25-2.25l-3-3M12 21.5V15");
}
</style><path class="iha929bau"/>`,
		"fallback": "uix:firework-crackle",
	});
}

export default Component;
