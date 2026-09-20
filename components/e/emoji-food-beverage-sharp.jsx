import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.vr_n172al {
  fill: currentColor;
  d: path("M4 21v-2h16v2zM18 8h2V5h-2zM4 17V3h5v2.4L7 7v5h5V7l-2-1.6V3h10q.825 0 1.413.588T22 5v3q0 .825-.587 1.413T20 10h-2v7z");
}
</style><path class="vr_n172al"/>`,
		"fallback": "material-symbols:emoji-food-beverage-sharp",
	});
}

export default Component;
