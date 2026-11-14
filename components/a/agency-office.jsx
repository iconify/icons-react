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
		"content": `<style>.klsf46brw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12.5h19m-17 0v9m9.5-9v9h5.5v-9M6.939 7.561l2.5-2.5a1.5 1.5 0 0 1 2.122 0l2.5 2.5a1.5 1.5 0 0 1 .439 1.06V11a1.5 1.5 0 0 1-1.5 1.5H8A1.5 1.5 0 0 1 6.5 11V8.621a1.5 1.5 0 0 1 .439-1.06M14 16.75h5.5");
}
</style><path class="klsf46brw"/>`,
		"fallback": "uix:agency-office",
	});
}

export default Component;
