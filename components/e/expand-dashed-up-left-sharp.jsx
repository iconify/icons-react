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
		"content": `<style>.gm498ybdo {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M18 14L18 3M21.2929 6.2929L18 3L14.7071 6.2929M14 18L3 18M6.2929 14.7071L3 18L6.2929 21.2929M3 12L3 8.6667M3 6.6667L3 3L6.6667 3M8.6667 3L12 3");
}
</style><path class="gm498ybdo"/>`,
		"fallback": "keyline-icons:expand-dashed-up-left-sharp",
	});
}

export default Component;
