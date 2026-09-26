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
		"content": `<style>.z3zkowdqy {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M11 20L3 20L3 4L9.5 4L12 6.5L21 6.5L21 11M18 21L18 14M14.7071 17.2929L18 14L21.2929 17.2929");
}
</style><path class="z3zkowdqy"/>`,
		"fallback": "keyline-icons:folder-arrow-up-sharp",
	});
}

export default Component;
