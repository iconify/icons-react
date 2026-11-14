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
		"content": `<style>.jcwfyobzg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 14c-6 1.5-9.5-2.5-9.5-7.5c5-.5 9 3 9.5 7.5m0 0c6 1.5 9.5-2.5 9.5-7.5c-5-.5-9 3-9.5 7.5m0 0v6.5M5.5 6.75l-.25-3m3.5 4.5L9.5 5.5m9 1.25l.25-3m-3.5 4.5L14.5 5.5");
}
</style><path class="jcwfyobzg"/>`,
		"fallback": "uix:carnivorous-plant",
	});
}

export default Component;
