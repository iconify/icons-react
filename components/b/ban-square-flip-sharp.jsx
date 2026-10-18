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
		"content": `<style>.o1zcoeo4o {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M21 3L3 3L3 21L21 21L21 3ZM21 3L3 21");
}
</style><path class="o1zcoeo4o"/>`,
		"fallback": "keyline-icons:ban-square-flip-sharp",
	});
}

export default Component;
