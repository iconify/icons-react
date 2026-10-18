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
		"content": `<style>.izrr_fbur {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6.7071 21.2929L12 16L17.2929 21.2929");
}
</style><path class="izrr_fbur"/>`,
		"fallback": "keyline-icons:chevrons-up-1-sharp",
	});
}

export default Component;
