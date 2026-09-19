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
		"content": `<style>.kf-0-xrog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.8 30.5c7.18 0 13 5.82 13 13c-7.18 0-13-5.82-13-13m13-26v26c-7.18 0-13-5.82-13-13v-13zm2.4 13a13 13 0 0 1 13 13a13 13 0 0 1-13 13z");
}
</style><path class="kf-0-xrog"/>`,
		"fallback": "arcticons:bluevine",
	});
}

export default Component;
