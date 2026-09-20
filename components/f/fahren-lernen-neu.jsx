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
		"content": `<style>.a7i8w605k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 38.5a33 33 0 0 0-9.666-23.335l-3.537 3.537M26.47 21.53L10.859 34.74a4 4 0 0 0-4.186 6.588a4 4 0 0 0 6.59-4.187l13.209-15.612ZM9.5 10.5v-5m6.438.634l-.586 2.945m6.777-1.067l-1.15 2.775m6.855.275l-1.668 2.496");
}
</style><path class="a7i8w605k"/>`,
		"fallback": "arcticons:fahren-lernen-neu",
	});
}

export default Component;
