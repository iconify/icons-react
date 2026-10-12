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
		"content": `<style>.bb8zptfkh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 3.25v2.5m0 2.5v2.5m0 2.5v2.5m0 2.5v2.5M9 8.575v6.85q0 1.2-1.2 1.2H4.2q-1.2 0-.55-1.01l4.7-7.23q.65-1.01.65.19m6 0v6.85q0 1.2 1.2 1.2h3.6q1.2 0 .55-1.01l-4.7-7.23q-.65-1.01-.65.19");
}
</style><path class="bb8zptfkh"/>`,
		"fallback": "iconoven:flip-horizontal",
	});
}

export default Component;
