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
		"content": `<style>.b3it28b-z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 3L4.25 4.75L2.5 15.5h3.25L7 10v11h10V10l1.25 5.5h3.25L19.75 4.75L15.5 3C15 4.75 13.75 5.75 12 5.75S9 4.75 8.5 3M12 9h.01M12 12.5h.01");
}
</style><path class="b3it28b-z"/>`,
		"fallback": "uix:henley-shirt",
	});
}

export default Component;
