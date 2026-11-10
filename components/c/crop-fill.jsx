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
		"content": `<style>.xdm-gl48c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 2V16C6 17.1 6.8954 18 8 18H22M18 22V8C18 6.9 17.1046 6 16 6H2");
}
</style><path class="xdm-gl48c"/>`,
		"fallback": "keyline-icons:crop-fill",
	});
}

export default Component;
