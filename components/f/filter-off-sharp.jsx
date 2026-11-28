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
		"content": `<style>.j66o5w8yb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7.6569 3L21 3L15.4257 9.7688L14.79 10.5408M14 14L14 19L10 21L10 14.6569M1.7071 1.7071L22.2929 22.2929");
}
</style><path class="j66o5w8yb"/>`,
		"fallback": "keyline-icons:filter-off-sharp",
	});
}

export default Component;
