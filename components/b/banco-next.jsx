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
		"content": `<style>.fy9zjbblv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.5 17.036L4.5 35.27l11.27-22.54l21.019 17.601z");
}
</style><path class="fy9zjbblv"/>`,
		"fallback": "arcticons:banco-next",
	});
}

export default Component;
