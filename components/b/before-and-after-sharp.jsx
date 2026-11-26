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
		"content": `<style>.fdfcy61cc {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 5L22 5L22 19L12 19M9 19L8 19L2 19L2 5L8 5L9 5M12 23L12 22L12 19L12 5L12 2L12 1");
}
</style><path class="fdfcy61cc"/>`,
		"fallback": "keyline-icons:before-and-after-sharp",
	});
}

export default Component;
