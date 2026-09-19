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
		"content": `<style>.a4uboobxz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.22 15.877c-.448 7.107-.36 13.794 6.82 15.534");
}

.t_mc8qfgi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.805 8.3H36.36v7.306h6.55s4.255 17.342-10.068 22.19c-9.568 3.24-16.858 2.367-22.516-2.76C2.918 28.325 4.602 8.224 4.805 8.3");
}
</style><path class="t_mc8qfgi"/><path class="a4uboobxz"/>`,
		"fallback": "arcticons:didi-greater-china",
	});
}

export default Component;
