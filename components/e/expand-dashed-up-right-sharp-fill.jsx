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
		"content": `<style>.c_toq0bkr {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10 18L21 18M17.7071 21.2929L21 18L17.7071 14.7071M6 14L6 3M9.2929 6.2929L6 3L2.7071 6.2929M12 3L15.3333 3M17.3333 3L21 3L21 6.6667M21 8.6667L21 12");
}
</style><path class="c_toq0bkr"/>`,
		"fallback": "keyline-icons:expand-dashed-up-right-sharp-fill",
	});
}

export default Component;
