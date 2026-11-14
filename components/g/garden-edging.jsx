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
		"content": `<style>.ddhkcxqnx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 19v-4.5a2.25 2.25 0 0 1 4.5 0V19m0-4.5a2.25 2.25 0 0 1 4.5 0V19m0-4.5a2.25 2.25 0 0 1 4.5 0V19m0-4.5a2.25 2.25 0 0 1 4.5 0V19M2.5 19h19M12 11.75V7m0 1.5c-2.5 0-4-1.5-4-4c2.5 0 4 1.5 4 4M12 7c2.5 0 4-1.5 4-4c-2.5 0-4 1.5-4 4");
}
</style><path class="ddhkcxqnx"/>`,
		"fallback": "uix:garden-edging",
	});
}

export default Component;
