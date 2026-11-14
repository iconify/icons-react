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
		"content": `<style>.jh3--5aoo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m13.029 9.584l.679 1.377a1.5 1.5 0 0 0 1.13.821l1.519.221a1.147 1.147 0 0 1 .636 1.956l-1.1 1.072a1.5 1.5 0 0 0-.431 1.328l.26 1.513a1.147 1.147 0 0 1-1.665 1.21l-1.359-.715a1.5 1.5 0 0 0-1.396 0l-1.359.715a1.147 1.147 0 0 1-1.665-1.21l.26-1.513a1.5 1.5 0 0 0-.431-1.328l-1.1-1.072a1.147 1.147 0 0 1 .636-1.956l1.519-.221a1.5 1.5 0 0 0 1.13-.821l.679-1.377a1.147 1.147 0 0 1 2.058 0M12 2.5v5");
}
</style><path class="jh3--5aoo"/>`,
		"fallback": "uix:hanging-star",
	});
}

export default Component;
