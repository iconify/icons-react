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
		"content": `<style>.r_0nscc9b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.5 4.5h29v39h-29zm11.6 13h17.4m-29 13h17.4");
}
</style><path class="r_0nscc9b"/>`,
		"fallback": "arcticons:cms-mobile",
	});
}

export default Component;
