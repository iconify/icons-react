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
		"content": `<style>.oobc6wbgs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.3 5.99l2.9-2.73q.55-.51 1.3-.51h9q.75 0 1.3.51l2.9 2.73q.55.51-.2.51h-17q-.75 0-.2-.51m.94 4.41l3.77-.8q.49-.1.99-.1h6q.5 0 .99.1l3.77.8q.49.1.49.6v4.75q0 .5-.5.55l-3.75.4q-.5.05-1 .05H9q-.5 0-1-.05l-3.75-.4q-.5-.05-.5-.55V11q0-.5.49-.6m4.26-.9v7.25m7-7.25v7.25m-12.75 3h18.5");
}
</style><path class="oobc6wbgs"/>`,
		"fallback": "iconoven:bay-window",
	});
}

export default Component;
