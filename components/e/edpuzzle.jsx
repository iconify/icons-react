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
		"content": `<style>.w1eimxsep {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m9.216 34.068l8.98-8.98a1.536 1.536 0 0 0 0-2.177l-8.98-8.98l8.98-8.979a1.536 1.536 0 0 1 2.176 0l5.624 5.624a4.746 4.746 0 0 1 6.712 6.712l5.624 5.624a1.536 1.536 0 0 1 0 2.176l-5.624 5.624a4.746 4.746 0 0 0-6.712 6.712l-5.624 5.624a1.536 1.536 0 0 1-2.176 0zV13.932");
}
</style><path class="w1eimxsep"/>`,
		"fallback": "arcticons:edpuzzle",
	});
}

export default Component;
