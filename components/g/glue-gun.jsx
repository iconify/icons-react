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
		"content": `<style>.ba5_l4baf {
  d: path("M2.75 8H7m8.5-3.5h-7Q7 4.5 7 6v4q0 1.5.5 1.5t.37 1.49l-.49 5.52Q7.25 20 8.66 20.5l.68.25q1.41.5 1.56-.99l.7-6.77q.15-1.49 1.65-1.49h2.25q1.5 0 1.5-1.5V6q0-1.5-1.5-1.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vbbp7lbbg {
  d: path("m17.09 6.6l3.32.95q.34.1.34.45t-.34.45l-3.32.95q-.34.1-.34-.25v-2.3q0-.35.34-.25M14 11.5v3.25");
}
</style><g class="hntgybcog"><path class="ba5_l4baf"/><path class="vbbp7lbbg"/></g>`,
		"fallback": "iconoven:glue-gun",
	});
}

export default Component;
