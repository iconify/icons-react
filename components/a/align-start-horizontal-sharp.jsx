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
		"content": `<style>.rlyv812it {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M23 2H1M20 6H14V14H20V6ZM10 6H4V22H10V6Z");
}
</style><path class="rlyv812it"/>`,
		"fallback": "keyline-icons:align-start-horizontal-sharp",
	});
}

export default Component;
