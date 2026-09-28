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
		"content": `<style>.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.md606bbbp {
  stroke-opacity: 0.4;
  d: path("M12 8L12 22M7 13L3 13C3 17.9706 7.0294 22 12 22C16.9706 22 21 17.9706 21 13L17 13");
}

.tv-ylcblu {
  fill: currentColor;
  d: path("M16 5C16 7.2091 14.2091 9 12 9C9.7909 9 8 7.2091 8 5C8 2.7909 9.7909 1 12 1C14.2091 1 16 2.7909 16 5Z");
  stroke: none;
}
</style><g class="gp_8x1bzb"><path class="md606bbbp"/><path class="tv-ylcblu"/></g>`,
		"fallback": "keyline-icons:anchor-sharp-duotone",
	});
}

export default Component;
