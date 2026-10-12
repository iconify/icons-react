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
		"content": `<style>.vkyi4tbov {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.75 15.25l1.65-4.5l.367-1.23L7.05 9.5h9.9l1.283.02l.367 1.23l1.65 4.5v6H3.75v-1Zm.5-1h15.5M6.5 17.75H8m8 0h1.5M7 2.75l1.5 2v.75a1.5 1.5 0 0 1-3 0v-.75zm5 0l1.5 2v.75a1.5 1.5 0 0 1-3 0v-.75zm5 0l1.5 2v.75a1.5 1.5 0 0 1-3 0v-.75z");
}
</style><path class="vkyi4tbov"/>`,
		"fallback": "iconoven:car-wash-sharp",
	});
}

export default Component;
