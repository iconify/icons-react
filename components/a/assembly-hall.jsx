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
		"content": `<style>.yn3iniiqh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m7.25 6l4.051-2.132a1.5 1.5 0 0 1 1.398 0L16.75 6a1.326 1.326 0 0 1-.618 2.5H7.868A1.326 1.326 0 0 1 7.25 6M2.5 20.5h19m-17-12v12m5-12v12m5-12v12m5-12v12");
}
</style><path class="yn3iniiqh"/>`,
		"fallback": "uix:assembly-hall",
	});
}

export default Component;
