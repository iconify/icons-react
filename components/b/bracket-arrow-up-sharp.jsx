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
		"content": `<style>.c3bf5i-0n {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M20 11.8907L20 22L4 22L4 11.8907M12 2.2414L12 13.8907M17.796 8.1438L12 2L6.204 8.1438");
}
</style><path class="c3bf5i-0n"/>`,
		"fallback": "keyline-icons:bracket-arrow-up-sharp",
	});
}

export default Component;
