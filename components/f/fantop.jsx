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
		"content": `<style>.g5f_9sb8l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 5.502a4 4 0 0 0-2.828 1.172l-11.5 11.5A4 4 0 0 0 8.5 21.002v6a4 4 0 0 0 1.172 2.828l11.5 11.5a4 4 0 0 0 5.656 0l11.5-11.5a4 4 0 0 0 1.172-2.828v-6a4 4 0 0 0-1.172-2.828l-11.5-11.5A4 4 0 0 0 24 5.502");
}

.tnjn_mvmr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m14.5 21l9.5-9.498L33.5 21M24 21l-4.749-4.75");
}
</style><path class="g5f_9sb8l"/><path class="tnjn_mvmr"/>`,
		"fallback": "arcticons:fantop",
	});
}

export default Component;
