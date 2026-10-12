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
		"content": `<style>.xuxkddbdd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.3 5.99l2.9-2.73l.55-.51h10.5l.55.51l2.9 2.73l.55.51H2.75zm.94 4.41l3.77-.8q.49-.1.99-.1h6q.5 0 .99.1l3.77.8l.49.1v5.75l-.5.05l-3.75.4q-.5.05-1 .05H9q-.5 0-1-.05l-3.75-.4l-.5-.05V10.5zm4.26-.9v7.25m7-7.25v7.25m-12.75 3h18.5");
}
</style><path class="xuxkddbdd"/>`,
		"fallback": "iconoven:bay-window-sharp",
	});
}

export default Component;
