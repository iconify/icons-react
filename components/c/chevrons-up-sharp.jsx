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
		"content": `<style>.mww2knb8y {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6.7071 11.2929L12 6L17.2929 11.2929M6.7071 18.2929L12 13L17.2929 18.2929");
}
</style><path class="mww2knb8y"/>`,
		"fallback": "keyline-icons:chevrons-up-sharp",
	});
}

export default Component;
