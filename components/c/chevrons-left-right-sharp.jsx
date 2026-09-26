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
		"content": `<style>.ds9laxbrx {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9.2929 6.7071L4 12L9.2929 17.2929M14.7071 6.7071L20 12L14.7071 17.2929");
}
</style><path class="ds9laxbrx"/>`,
		"fallback": "keyline-icons:chevrons-left-right-sharp",
	});
}

export default Component;
