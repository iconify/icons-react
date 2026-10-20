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
		"content": `<style>.zuzmdib7g {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 2L17 2M12 2L12 5C12 5.415 12.1291 5.8197 12.3694 6.1581L16.8918 12.5258C17.6127 13.5408 18 14.755 18 16C18 19.3137 15.3137 22 12 22C8.6863 22 6 19.3137 6 16L6 15");
}
</style><path class="zuzmdib7g"/>`,
		"fallback": "keyline-icons:hook-sharp",
	});
}

export default Component;
