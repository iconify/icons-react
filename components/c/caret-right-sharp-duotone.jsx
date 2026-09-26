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
		"content": `<style>.s1vs7vpjb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M18 12L6 19L6 5L18 12Z");
}
</style><path class="s1vs7vpjb"/>`,
		"fallback": "keyline-icons:caret-right-sharp-duotone",
	});
}

export default Component;
