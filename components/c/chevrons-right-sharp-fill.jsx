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
		"content": `<style>.t5yjy8bij {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5.7071 17.2929L11 12L5.7071 6.7071M12.7071 17.2929L18 12L12.7071 6.7071");
}
</style><path class="t5yjy8bij"/>`,
		"fallback": "keyline-icons:chevrons-right-sharp-fill",
	});
}

export default Component;
