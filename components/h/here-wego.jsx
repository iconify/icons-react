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
		"content": `<style>.uhx4m3bvl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.365 35.125a2.322 2.322 0 0 1-1.641-3.963L26.33 13.555a2.321 2.321 0 0 1 3.283 3.283L12.006 34.445a2.3 2.3 0 0 1-1.641.68m13.205 0a2.322 2.322 0 0 1-1.64-3.963l17.607-17.607a2.321 2.321 0 1 1 3.283 3.283L25.212 34.445a2.3 2.3 0 0 1-1.641.68M6.822 25.462A2.321 2.321 0 0 1 5.18 21.5l7.945-7.945a2.321 2.321 0 1 1 3.283 3.283l-7.945 7.944a2.3 2.3 0 0 1-1.641.68m1.291 6.778l2.369-9.477m6.537-7.003l-2.369 9.477m6.669 7.004l2.369-9.477m6.537-7.004l-2.37 9.477");
}
</style><path class="uhx4m3bvl"/>`,
		"fallback": "arcticons:here-wego",
	});
}

export default Component;
