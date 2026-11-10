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
		"content": `<style>.h45ph_boo {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M16 12C16 10.34 17.343 9 19 9C20.657 9 22 10.34 22 12C22 13.66 20.657 15 19 15C17.343 15 16 13.66 16 12ZM16 12H8M8 12C8 13.66 6.657 15 5 15C3.343 15 2 13.66 2 12C2 10.34 3.343 9 5 9C6.657 9 8 10.34 8 12Z");
}
</style><path class="h45ph_boo"/>`,
		"fallback": "keyline-icons:guidepoint-sharp",
	});
}

export default Component;
