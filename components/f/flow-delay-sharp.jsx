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
		"content": `<style>.a8gmi_brj {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 5L15 5C18.866 5 22 8.134 22 12C22 15.866 18.866 19 15 19L2 19Z");
}
</style><path class="a8gmi_brj"/>`,
		"fallback": "keyline-icons:flow-delay-sharp",
	});
}

export default Component;
