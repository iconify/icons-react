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
		"content": `<style>.ph9zg-b4h {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M13 3L21 3L21 11M13.7071 10.2929L20.8243 3.1757M11 21L3 21L3 13M10.2929 13.7071L3.1757 20.8243");
}
</style><path class="ph9zg-b4h"/>`,
		"fallback": "keyline-icons:fullscreen-sharp-fill",
	});
}

export default Component;
