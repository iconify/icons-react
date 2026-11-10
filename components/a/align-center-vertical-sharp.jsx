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
		"content": `<style>.kmzolebbg {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 1V4M12 10V14M12 20V23M16 4V10H8V4H16ZM20 14V20H4V14H20Z");
}
</style><path class="kmzolebbg"/>`,
		"fallback": "keyline-icons:align-center-vertical-sharp",
	});
}

export default Component;
