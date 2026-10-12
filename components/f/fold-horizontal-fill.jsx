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
		"content": `<style>.li1qofjen {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 12L8 12M5 9L8 12L5 15M22 12L16 12M19 9L16 12L19 15M12 5L12 19");
}
</style><path class="li1qofjen"/>`,
		"fallback": "keyline-icons:fold-horizontal-fill",
	});
}

export default Component;
