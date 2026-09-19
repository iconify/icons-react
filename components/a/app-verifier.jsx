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
		"content": `<style>.cw0yguh7p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m41.534 12.128l-7.358-.574l-2.257-7.346L24 8.163l-7.92-3.954l-2.256 7.346l-7.358.574l1.696 7.345L2.5 24l5.662 4.527l-1.696 7.345l7.358.574l2.257 7.346L24 39.838l7.92 3.953l2.256-7.345l7.358-.574l-1.696-7.345L45.5 24l-5.662-4.527z");
}

.eh1mzybkg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.746 17.927L20.327 30.073l-6.073-6.709");
}
</style><path class="cw0yguh7p"/><path class="eh1mzybkg"/>`,
		"fallback": "arcticons:app-verifier",
	});
}

export default Component;
