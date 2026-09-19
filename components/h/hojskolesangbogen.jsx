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
		"content": `<style>.r1hyp9pns {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4M17.375 14v20m13.25-20v20m-13.25-10.038h13.25M29.375 14h2.5m-15.75 0h2.5m10.75 20h2.5m-15.75 0h2.5");
}
</style><path class="r1hyp9pns"/>`,
		"fallback": "arcticons:hojskolesangbogen",
	});
}

export default Component;
