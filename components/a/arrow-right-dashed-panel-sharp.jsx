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
		"content": `<style>.vnck60kii {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 7L3 3L7 3M9.5 3L14.5 3M21 8L21 3.0001L17 3M8 21L3 21L3 17M3 9.5L3 14.5M9 15.5L20.6757 15.5M14.6757 9.7028L21 15.5L14.7132 21.2628");
}
</style><path class="vnck60kii"/>`,
		"fallback": "keyline-icons:arrow-right-dashed-panel-sharp",
	});
}

export default Component;
