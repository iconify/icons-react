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
		"content": `<style>.xfnug_vzc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 7a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0M6 10.25V20m-2.5-3.5h5m4.75-.5a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0m5.5-2.25L21.5 11m-2.75 0h2.75v2.75M12 6.5h3.5M12 9.25h3.5");
}
</style><path class="xfnug_vzc"/>`,
		"fallback": "uix:cause-gender-equality",
	});
}

export default Component;
