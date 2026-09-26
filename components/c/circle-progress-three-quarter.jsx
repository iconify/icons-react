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
		"content": `<style>.qefui5bav {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 22C6.47715 22 2 17.5229 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12M20.0902 17.8778C19.4734 18.7268 18.7268 19.4734 17.8778 20.0902");
}
</style><path class="qefui5bav"/>`,
		"fallback": "keyline-icons:circle-progress-three-quarter",
	});
}

export default Component;
