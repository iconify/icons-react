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
		"content": `<style>.vnht4mbew {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M41.619 13.53a9.41 9.41 0 0 1-1.875 10.63L24 39.904L8.256 24.16h0A9.41 9.41 0 1 1 24 15.07A9.41 9.41 0 0 1 37.868 9.4L24 23.269l-7.426-7.427a2.353 2.353 0 0 0-3.327 3.327L24 29.922l17.196-17.196q.228.39.422.803z");
}
</style><path class="vnht4mbew"/>`,
		"fallback": "arcticons:blood-test-tracker",
	});
}

export default Component;
