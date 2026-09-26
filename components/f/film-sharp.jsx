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
		"content": `<style>.atd8x-w7z {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 3L21 3L21 21L3 21L3 3ZM8 3L8 21M16 3L16 21M3 12L21 12M3 7.5L8 7.5M16 7.5L21 7.5M3 16.5L8 16.5M16 16.5L21 16.5");
}
</style><path class="atd8x-w7z"/>`,
		"fallback": "keyline-icons:film-sharp",
	});
}

export default Component;
