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
		"content": `<style>.b8hl200ls {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 20.5v-4.75q0-.75.66-1.11l6.93-3.78q.66-.36 1.32 0l6.93 3.78q.66.36.66 1.11v4.75q0 .75-.75.75h-15q-.75 0-.75-.75m-1 .75h18.5M3.75 16.5h16.5m-8.25 0v4.75M12 7.5V2.75M9.75 5L12 2.75L14.25 5");
}
</style><path class="b8hl200ls"/>`,
		"fallback": "iconoven:greenhouse-gas",
	});
}

export default Component;
