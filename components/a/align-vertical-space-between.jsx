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
		"content": `<style>.akjkwtbmw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 20H22M2 4H22M9 4H15C16.1046 4 17 4.8954 17 6V7C17 8.1046 16.1046 9 15 9H9C7.8954 9 7 8.1046 7 7V6C7 4.8954 7.8954 4 9 4ZM9 15H15C16.1046 15 17 15.8954 17 17V18C17 19.1046 16.1046 20 15 20H9C7.8954 20 7 19.1046 7 18V17C7 15.8954 7.8954 15 9 15Z");
}
</style><path class="akjkwtbmw"/>`,
		"fallback": "keyline-icons:align-vertical-space-between",
	});
}

export default Component;
