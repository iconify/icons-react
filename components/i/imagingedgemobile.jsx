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
		"content": `<style>.ird0rqbwu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.25 4.5h6.5V11h6.5v32.5H7.75V11h19.5Zm0 6.5v6.51h-13V37h19.5V11Zm0 0");
}
</style><path class="ird0rqbwu"/>`,
		"fallback": "arcticons:imagingedgemobile",
	});
}

export default Component;
