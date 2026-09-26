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
		"content": `<style>.dn0jrr8qk {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M11 20L3 20L3 4L9.5 4L12 6.5L21 6.5L21 11M22 17L15 17M18.2929 13.7071L15 17L18.2929 20.2929");
}
</style><path class="dn0jrr8qk"/>`,
		"fallback": "keyline-icons:folder-arrow-left-sharp",
	});
}

export default Component;
