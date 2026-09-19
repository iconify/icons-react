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
		"content": `<style>.zyjiftgfm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.5 15.525A3.5 3.5 0 1 1 26.475 18l-1.738 1.738c-.664.86.017 1.29 4.323 4.759L43.5 35.975M22 22.475l-17.5 13.5M37 30.808H11.198");
}
</style><path class="zyjiftgfm"/>`,
		"fallback": "arcticons:aiuta",
	});
}

export default Component;
