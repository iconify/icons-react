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
		"content": `<style>.bxhmjp6ad {
  fill: currentColor;
  d: path("M40.402 41.99A2.5 2.5 0 0 1 37.95 44h-1.9a2.5 2.5 0 0 1-2.452-2.01L33.199 40h7.6zM20 8c1.576 0 2.997.663 4 1.725A5.5 5.5 0 0 1 28 8h13a3 3 0 0 1 3 3v11.86a10 10 0 0 0-3-2.026V11H28a2.5 2.5 0 0 0-2.5 2.5v21A2.5 2.5 0 0 0 28 37h1.862q.404.413.854.777L31.16 40H28a5.5 5.5 0 0 1-4-1.725A5.5 5.5 0 0 1 20 40H7a3 3 0 0 1-3-3V11a3 3 0 0 1 3-3zm17 14a8 8 0 0 1 4.473 14.633L41.199 38h-8.4l-.273-1.367A8 8 0 0 1 37 22M7 37h13a2.5 2.5 0 0 0 2.5-2.5v-21A2.5 2.5 0 0 0 20 11H7z");
}
</style><path class="bxhmjp6ad"/>`,
		"fallback": "fluent:book-open-lightbulb-48-filled",
	});
}

export default Component;
