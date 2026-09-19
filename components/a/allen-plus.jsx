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
		"content": `<style>.eppqblbar {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24 16.377l7.885 21.132a3.91 3.91 0 0 0 3.667 2.545H42.5L30.513 7.946H17.488L5.5 40.054h6.948a3.91 3.91 0 0 0 3.667-2.545L26.513 9.643a2.61 2.61 0 0 1 2.445-1.697h1.555");
}
</style><path class="eppqblbar"/>`,
		"fallback": "arcticons:allen-plus",
	});
}

export default Component;
