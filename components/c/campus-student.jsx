import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.w263nl2lu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.874 13.323L24.86 4.5L11.78 21.166l24.44-.256L24.237 43.5L17.76 30.67");
}
</style><path class="w263nl2lu"/>`,
		"fallback": "arcticons:campus-student",
	});
}

export default Component;
