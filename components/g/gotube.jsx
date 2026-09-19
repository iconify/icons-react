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
		"content": `<style>.ptt7uobcg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.97 21.044a4.828 4.828 0 1 0-9.655 0v4.919a4.828 4.828 0 0 0 9.656 0h-4.828m13.645 4.827a4.843 4.843 0 0 1-4.843-4.843v-4.934a4.843 4.843 0 1 1 9.686 0v4.934a4.843 4.843 0 0 1-4.843 4.843");
}

.yjngxpqlv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.118 44.436C-1.401 46.384-.426 3.5 17.118 3.5c11.696 0 27.29 12.67 27.29 18.518c0 6.823-15.594 22.418-27.29 22.418");
}
</style><path class="yjngxpqlv"/><path class="ptt7uobcg"/>`,
		"fallback": "arcticons:gotube",
	});
}

export default Component;
