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
		"content": `<style>.qfvuw-z8q {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10 20L3 20L3 3L20 3L20 10M6 7L10 7M10.5489 10.528L14.1426 21L16.6527 16.4663L21 14.3L10.5489 10.528Z");
}
</style><path class="qfvuw-z8q"/>`,
		"fallback": "keyline-icons:cursor-window-sharp",
	});
}

export default Component;
