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
		"content": `<style>.so59oyb5k {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M23 4H1M23 14H1M16 10V4H8V10H16ZM20 14H4V20H20V14Z");
}
</style><path class="so59oyb5k"/>`,
		"fallback": "keyline-icons:align-vertical-distribute-start-sharp",
	});
}

export default Component;
