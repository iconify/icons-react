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
		"content": `<style>.szy038bsu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.104 16.104L8.797 8.797m30.406 30.406l-7.488-7.564A10.861 10.861 0 1 1 24 13.136a11.82 11.82 0 0 1 7.804 3.058l7.474-7.32a21.5 21.5 0 1 0-.087 30.34M16.27 31.73l-7.473 7.473");
}
</style><path class="szy038bsu"/>`,
		"fallback": "arcticons:darkcroc-theme",
	});
}

export default Component;
