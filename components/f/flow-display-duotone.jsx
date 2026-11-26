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
		"content": `<style>.jm_6tmboj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M15 5C18.866 5 22 8.134 22 12C22 15.866 18.866 19 15 19L8.886 19C8.3218 19 7.7838 18.7617 7.4047 18.3438L2.2593 12.6719C1.9135 12.2907 1.9135 11.7093 2.2593 11.3281L7.4047 5.6562C7.7838 5.2383 8.3218 5 8.886 5L15 5Z");
}
</style><path class="jm_6tmboj"/>`,
		"fallback": "keyline-icons:flow-display-duotone",
	});
}

export default Component;
