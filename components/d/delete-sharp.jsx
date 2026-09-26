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
		"content": `<style>.ob5rnnpdj {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2.0001 12L9 4L22 4L22 20L9 20L2.0001 12ZM10.7071 8.7071L17.2929 15.2929M17.2929 8.7071L10.7071 15.2929");
}
</style><path class="ob5rnnpdj"/>`,
		"fallback": "keyline-icons:delete-sharp",
	});
}

export default Component;
