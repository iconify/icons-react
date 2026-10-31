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
		"content": `<style>.hlgi8vbrm {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 4L17 4L14.2 9L5.8 9ZM5.8 9L3.56 13.7143L3 15L3 17L6 20L14 20L17 17L17 15L16.44 13.7143L14.2 9M15 4L21 4L21 12");
}
</style><path class="hlgi8vbrm"/>`,
		"fallback": "keyline-icons:coffee-pot-sharp",
	});
}

export default Component;
