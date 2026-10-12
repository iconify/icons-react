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
		"content": `<style>.dja7t0_-p {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 1L12 8M8.7071 4.7071L12 8L15.2929 4.7071M12 23L12 16M8.7071 19.2929L12 16L15.2929 19.2929M4 12L20 12");
}
</style><path class="dja7t0_-p"/>`,
		"fallback": "keyline-icons:fold-vertical-sharp-fill",
	});
}

export default Component;
