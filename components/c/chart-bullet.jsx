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
		"content": `<style>.m-f2_qwdp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 3L3 19C3 20.1046 3.8954 21 5 21L21 21M8 10L20 10C20.5523 10 21 10.4477 21 11L21 13C21 13.5523 20.5523 14 20 14L8 14C7.4477 14 7 13.5523 7 13L7 11C7 10.4477 7.4477 10 8 10ZM16 7V17");
}
</style><path class="m-f2_qwdp"/>`,
		"fallback": "keyline-icons:chart-bullet",
	});
}

export default Component;
