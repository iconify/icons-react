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
		"content": `<style>.b3a9afb9s {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 3L21 3L21 21L3 21L3 3ZM7.5 3L7.5 21M12 3L12 21M16.5 3L16.5 21");
}
</style><path class="b3a9afb9s"/>`,
		"fallback": "keyline-icons:columns-4-sharp",
	});
}

export default Component;
