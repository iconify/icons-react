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
		"content": `<style>.j9e_q-bmf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 5L15 5C18.866 5 22 8.134 22 12C22 15.866 18.866 19 15 19L9 19C5.134 19 2 15.866 2 12C2 8.134 5.134 5 9 5Z");
}
</style><path class="j9e_q-bmf"/>`,
		"fallback": "keyline-icons:flow-terminator",
	});
}

export default Component;
