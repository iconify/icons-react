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
		"content": `<style>.cnmfcnjhf {
  d: path("M16.48 3.98L3.87 18.37a1.25 1.25 0 0 0 1.76 1.76L20.02 7.52a2.5 1.25 45 0 0-3.54-3.54");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i6-t9nb6o {
  d: path("M20.02 7.52a2.5 1.25 45 0 1-3.54-3.54m-2.97 3.39l3.12 3.12m-5.44-.48l2.8 2.8");
}
</style><g class="hntgybcog"><path class="cnmfcnjhf"/><path class="i6-t9nb6o"/></g>`,
		"fallback": "iconoven:didgeridoo",
	});
}

export default Component;
