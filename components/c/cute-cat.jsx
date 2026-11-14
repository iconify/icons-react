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
		"content": `<style>.c72its8uf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5 9l.5-5.5l4.5 3a8 8 0 0 1 4 0l4.5-3L19 9A8 8 0 1 1 5 9m4 3h.01M15 12h.01M12 15h.01");
}
</style><path class="c72its8uf"/>`,
		"fallback": "uix:cute-cat",
	});
}

export default Component;
