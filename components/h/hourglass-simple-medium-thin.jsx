import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ltgdc7qxd {
  fill: currentColor;
  d: path("m133.78 128l74.68-71.51A12 12 0 0 0 200 36H56a12 12 0 0 0-8.49 20.49l.07.06L122.22 128l-74.61 71.45l-.07.06A12 12 0 0 0 56 220h144a12 12 0 0 0 8.42-20.55ZM87.84 84h80.32L128 122.46ZM52.33 46.47A3.93 3.93 0 0 1 56 44h144a4 4 0 0 1 2.89 6.77L176.51 76h-97L53.17 50.8a3.92 3.92 0 0 1-.84-4.33m151.34 163.06A3.93 3.93 0 0 1 200 212H56a4 4 0 0 1-2.86-6.8L124 137.37V168a4 4 0 0 0 8 0v-30.63l70.8 67.8a3.93 3.93 0 0 1 .87 4.36");
}
</style><path class="ltgdc7qxd"/>`,
		"fallback": "ph:hourglass-simple-medium-thin",
	});
}

export default Component;
