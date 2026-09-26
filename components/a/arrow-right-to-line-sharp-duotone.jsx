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
		"content": `<style>.mkdeaibiw {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M1 12L17.7302 12M10.8289 4.7008L18 12L10.8289 19.2992M22 4L22 20");
}
</style><path class="mkdeaibiw"/>`,
		"fallback": "keyline-icons:arrow-right-to-line-sharp-duotone",
	});
}

export default Component;
