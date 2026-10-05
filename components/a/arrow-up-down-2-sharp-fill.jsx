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
		"content": `<style>.lxofueb-v {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 23L7 22L7 11.7396L7 11.0856M12.2939 16.1938L12 15.8947L7 10.8066L2 15.8947L1.7061 16.1938M17 1L17 2L17 12.2604L17 12.9144M11.7061 7.8062L12 8.1053L17 13.1934L22 8.1053L22.2939 7.8062");
}
</style><path class="lxofueb-v"/>`,
		"fallback": "keyline-icons:arrow-up-down-2-sharp-fill",
	});
}

export default Component;
