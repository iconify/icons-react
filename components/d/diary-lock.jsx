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
		"content": `<style>.gq_3b1a5m {
  d: path("M8 2.5h8A3.5 3.5 0 0 1 19.5 6v12a3.5 3.5 0 0 1-3.5 3.5H8A3.5 3.5 0 0 1 4.5 18V6A3.5 3.5 0 0 1 8 2.5m-.5 0v19");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kmhqpvojh {
  d: path("M12.5 11.5h2a1.75 1.75 0 0 1 1.75 1.75v1A1.75 1.75 0 0 1 14.5 16h-2a1.75 1.75 0 0 1-1.75-1.75v-1a1.75 1.75 0 0 1 1.75-1.75m-.5 0V10a1.5 1.5 0 0 1 3 0v1.5");
}
</style><g class="hntgybcog"><path class="gq_3b1a5m"/><path class="kmhqpvojh"/></g>`,
		"fallback": "uix:diary-lock",
	});
}

export default Component;
