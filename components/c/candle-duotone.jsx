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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.lwyo9ackp {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M10.393 11a2.83 2.83 0 0 1-1.226-2.333c0-.486.115-1.06.472-1.417C10.347 6.542 11.292 4.889 12 3c.234 1.166.949 2.128 1.889 2.833c.762.763.944 1.795.944 2.834c0 .932-.458 1.804-1.226 2.333H15a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1Z");
}

.rlm_yy5zv {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 12a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1Zm2.393-1a2.83 2.83 0 0 1-1.226-2.333c0-.709.236-1.18.472-1.417C10.347 6.542 11.292 4.889 12 3c.236 1.18.944 2.125 1.889 2.833c.708.709.944 1.653.944 2.834c0 .932-.458 1.804-1.226 2.333");
}
</style><g class="ft5dv1b6b"><path class="lwyo9ackp"/><path class="rlm_yy5zv"/></g>`,
		"fallback": "coolicons:candle-duotone",
	});
}

export default Component;
