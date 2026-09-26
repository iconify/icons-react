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
		"content": `<style>.uvbv0eb9a {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 7L3 3L7 3M9 3L14 3M20 8L20 3L16 3M8 20L3 20L3 16M3 9L3 14M10.5489 10.528L14.1426 21L16.6527 16.4663L21 14.3L10.5489 10.528Z");
}
</style><path class="uvbv0eb9a"/>`,
		"fallback": "keyline-icons:cursor-dashed-panel-sharp",
	});
}

export default Component;
