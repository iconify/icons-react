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
		"content": `<style>.w3178pr7m {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10 20L3 20L3 3L20 3L20 10M10.5489 10.528L14.1426 21L16.6527 16.4663L21 14.3L10.5489 10.528Z");
}
</style><path class="w3178pr7m"/>`,
		"fallback": "keyline-icons:cursor-panel-sharp",
	});
}

export default Component;
