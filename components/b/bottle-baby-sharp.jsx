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
		"content": `<style>.ws9-cjbfu {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9.5 6C9.5 4.5 10.5 5 10.5 3.5C10.5 2.6716 11.1716 2 12 2C12.8284 2 13.5 2.6716 13.5 3.5C13.5 5 14.5 4.5 14.5 6M17 18L14 18L13 18M17 14L14 14L13 14M8 10L8 6L16 6L16 10M8 10L16 10M16 10L17 12.0002L17 14L17 18L17 22L7 22L7 12L8 10");
}
</style><path class="ws9-cjbfu"/>`,
		"fallback": "keyline-icons:bottle-baby-sharp",
	});
}

export default Component;
