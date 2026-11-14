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
		"content": `<style>.hc_odpbpv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 9.5v-1L12 3l9.5 5.5v1Zm2.5 0V21M19 9.5V21M12 9.5V21m-7-5h14");
}
</style><path class="hc_odpbpv"/>`,
		"fallback": "uix:gazebo",
	});
}

export default Component;
