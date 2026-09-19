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
		"content": `<style>.fmemu4bok {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 15.989h-9.25L5.5 32.01l4.625 8.01h27.75l4.625-8.01L28.625 7.978h-9.25L33.25 32.011h-18.5z");
}
</style><path class="fmemu4bok"/>`,
		"fallback": "arcticons:delta-dental",
	});
}

export default Component;
