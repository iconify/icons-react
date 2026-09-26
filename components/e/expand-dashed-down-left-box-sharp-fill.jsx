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
		"content": `<style>.lgytc7ilk {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M18 10L18 21M14.7071 17.7071L18 21L21.2929 17.7071M14 6L3 6M6.2929 2.7071L3 6L6.2929 9.2929M9 21L5 21M3 19L3 15M5 13L9 13M11 19L11 15");
}
</style><path class="lgytc7ilk"/>`,
		"fallback": "keyline-icons:expand-dashed-down-left-box-sharp-fill",
	});
}

export default Component;
