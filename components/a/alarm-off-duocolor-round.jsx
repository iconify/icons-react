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
		"content": `<style>.g3_5jacow {
  stroke-opacity: 0.4;
  d: path("m3 6l2-2m13-1l3 3M3 2l19 19");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qf8vl9i5t {
  d: path("M7.432 6.432a8 8 0 1 0 11.137 11.137M20 13a8 8 0 0 0-8-8");
}
</style><g class="nrj6p8qat"><path class="g3_5jacow"/><path class="qf8vl9i5t"/></g>`,
		"fallback": "coolicons:alarm-off-duocolor-round",
	});
}

export default Component;
