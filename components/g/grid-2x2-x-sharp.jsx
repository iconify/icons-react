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
		"content": `<style>.o7r9ncstz {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 11L20 11L20 2L2 2L2 20L11 20L11 2M15.7071 15.7071L22.2929 22.2929M22.2929 15.7071L15.7071 22.2929");
}
</style><path class="o7r9ncstz"/>`,
		"fallback": "keyline-icons:grid-2x2-x-sharp",
	});
}

export default Component;
