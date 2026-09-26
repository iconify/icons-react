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
		"content": `<style>.i5fksne7l {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 12L18.7302 12M11.8289 4.7008L19 12L11.8289 19.2992");
}
</style><path class="i5fksne7l"/>`,
		"fallback": "keyline-icons:arrow-right-sharp-duotone",
	});
}

export default Component;
