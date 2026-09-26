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
		"content": `<style>.xw0c-1bdz {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M16 9C16 5.1339 12.8661 2 9 2C5.1339 2 2 5.1339 2 9C2 12.8661 5.1339 16 9 16C12.8661 16 16 12.8661 16 9ZM9 9L22 9L22 22L9 22L9 9Z");
}
</style><path class="xw0c-1bdz"/>`,
		"fallback": "keyline-icons:circle-square-sharp",
	});
}

export default Component;
