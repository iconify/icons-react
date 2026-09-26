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
		"content": `<style>.pam7ue5gf {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 21V3H13C15.2091 3 17 4.7909 17 7C17 9.2091 15.2091 11 13 11M5 11H14C16.7614 11 19 13.2386 19 16C19 18.7614 16.7614 21 14 21H5");
}
</style><path class="pam7ue5gf"/>`,
		"fallback": "keyline-icons:bold-sharp-two-tone",
	});
}

export default Component;
