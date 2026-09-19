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
		"content": `<style>.rpnm80baq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.95 24.514c-.854 3.953-.67 7.905.133 11.86m21.89-10.43L21.234 36.872m0 0L6.362 24.17c-1.071-.916-1.781-2.203-1.86-5.12c-.055-2.157.848-3.17 1.909-3.406m37.089 1.28l-16.503-5.796l-20.681 4.55a2.72 2.72 0 0 1 2.153.385l13.061 8.645m0 0l21.97-7.783m-.132 8.82l-.395.198c-1.46-2.56-.947-8.833.527-9.02");
}
</style><path class="rpnm80baq"/>`,
		"fallback": "arcticons:fddb",
	});
}

export default Component;
