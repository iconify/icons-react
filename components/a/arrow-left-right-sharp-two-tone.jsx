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
		"content": `<style>.blr6m8r6y {
  d: path("M2 17L21 17M16.7071 12.7071L21 17L16.7071 21.2929");
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.oq17tfy7o {
  stroke-opacity: 0.4;
  d: path("M22 7L3 7M7.2929 11.2929L3 7L7.2929 2.7071");
}
</style><g class="gp_8x1bzb"><path class="oq17tfy7o"/><path class="blr6m8r6y"/></g>`,
		"fallback": "keyline-icons:arrow-left-right-sharp-two-tone",
	});
}

export default Component;
