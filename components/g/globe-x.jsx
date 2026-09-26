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
		"content": `<style>.z6eb9vbtd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12M2 12H22M12 2C14.6667 5 16 8.5 16 12M12 2C9.33333 5 8 8.5 8 12C8 15.5 9.33333 19 12 22M22 16L16 22M16 16L22 22");
}
</style><path class="z6eb9vbtd"/>`,
		"fallback": "keyline-icons:globe-x",
	});
}

export default Component;
