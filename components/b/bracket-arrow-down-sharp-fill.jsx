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
		"content": `<style>.q0a7rtval {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 12.1093L4 2L20 2L20 12.1093M12 21.7586L12 10.1093M6.204 15.8562L12 22L17.796 15.8562");
}
</style><path class="q0a7rtval"/>`,
		"fallback": "keyline-icons:bracket-arrow-down-sharp-fill",
	});
}

export default Component;
