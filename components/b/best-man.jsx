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
		"content": `<style>.bmh1obbzc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 21.5V10l6-5.25M9 7l3 7.5L15 7m0-2.25L21 10v11.5M10.5 3.625l.6.45a1.5 1.5 0 0 0 1.8 0l.6-.45a.938.938 0 0 1 1.5.75v.75a.938.938 0 0 1-1.5.75l-.6-.45a1.5 1.5 0 0 0-1.8 0l-.6.45a.938.938 0 0 1-1.5-.75v-.75a.938.938 0 0 1 1.5-.75M12 18.5h.01");
}
</style><path class="bmh1obbzc"/>`,
		"fallback": "uix:best-man",
	});
}

export default Component;
