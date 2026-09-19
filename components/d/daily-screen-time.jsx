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
		"content": `<style>.inaooib1o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 16.8v6.468l3.42 3.407");
}

.uuzqvpbra {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.651 4.5h12.698a5.02 5.02 0 0 1 5.038 5.027v28.946a5.02 5.02 0 0 1-5.038 5.027H17.65a5.02 5.02 0 0 1-5.038-5.027V9.527A5.02 5.02 0 0 1 17.651 4.5M12.7 38.211h22.6");
}
</style><path class="uuzqvpbra"/><path class="inaooib1o"/>`,
		"fallback": "arcticons:daily-screen-time",
	});
}

export default Component;
