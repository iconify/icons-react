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
		"content": `<style>.d4jkwuzsr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 5.5h12.333v12.333H24zm-12.333 0H24v12.333H11.667zM24 17.833h12.333v12.334H24zm0 12.334h12.333V42.5H24z");
}
</style><path class="d4jkwuzsr"/>`,
		"fallback": "arcticons:block-puzzle-jewel",
	});
}

export default Component;
