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
		"content": `<style>.fvyyxpb5j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m8.561 15.086l.353.353a1.5 1.5 0 0 1 0 2.122l-.353.353a1.5 1.5 0 0 1-2.122 0l-.353-.353a1.5 1.5 0 0 1 0-2.122l.353-.353a1.5 1.5 0 0 1 2.122 0m4.5-4.5l.353.353a1.5 1.5 0 0 1 0 2.122l-.353.353a1.5 1.5 0 0 1-2.122 0l-.353-.353a1.5 1.5 0 0 1 0-2.122l.353-.353a1.5 1.5 0 0 1 2.122 0m4.5-4.5l.353.353a1.5 1.5 0 0 1 0 2.122l-.353.353a1.5 1.5 0 0 1-2.122 0l-.353-.353a1.5 1.5 0 0 1 0-2.122l.353-.353a1.5 1.5 0 0 1 2.122 0M3.5 20.5l2.75-2.75m2.5-2.5l2-2m2.5-2.5l2-2m2.5-2.5L20.5 3.5");
}
</style><path class="fvyyxpb5j"/>`,
		"fallback": "uix:chicken-tikka",
	});
}

export default Component;
