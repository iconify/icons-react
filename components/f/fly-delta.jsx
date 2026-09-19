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
		"content": `<style>.k-bg8nb3a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M6.972 14.637L40.5 7.5L26.522 21.478zM3.5 16.011l14.244 14.245l6.014-6.014z");
}

.reapv0bav {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m33.363 41.028l-6.841-19.55L40.5 7.5zM31.989 44.5l-8.23-20.258l-6.015 6.014z");
}
</style><path class="reapv0bav"/><path class="k-bg8nb3a"/>`,
		"fallback": "arcticons:fly-delta",
	});
}

export default Component;
