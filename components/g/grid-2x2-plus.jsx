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
		"content": `<style>.fes5aeb-b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 11H18C19.1046 11 20 10.1046 20 9V5C20 3.3431 18.6569 2 17 2H5C3.3431 2 2 3.3431 2 5V17C2 18.6569 3.3431 20 5 20H9C10.1046 20 11 19.1046 11 18V2M19 16L19 22M16 19L22 19");
}
</style><path class="fes5aeb-b"/>`,
		"fallback": "keyline-icons:grid-2x2-plus",
	});
}

export default Component;
