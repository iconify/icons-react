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
		"content": `<style>.hlgxmq6ep {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M21 10L12 2.9963L3 10L3 21L21 21L21 10ZM9 21L9 14L15 14L15 21");
}
</style><path class="hlgxmq6ep"/>`,
		"fallback": "keyline-icons:home-sharp",
	});
}

export default Component;
