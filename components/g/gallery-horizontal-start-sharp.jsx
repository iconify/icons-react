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
		"content": `<style>.rha8oacpm {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 3L13 3L13 21L3 21L3 3ZM17 4L17 20M21 6L21 18");
}
</style><path class="rha8oacpm"/>`,
		"fallback": "keyline-icons:gallery-horizontal-start-sharp",
	});
}

export default Component;
