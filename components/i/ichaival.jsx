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
		"content": `<style>.c8frlpb7o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 35.85V15.589h-1.842L24 11.905l1.842 3.684H24");
}

.eckhj5bmo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 36.095a19.8 19.8 0 0 1 39 0Z");
}
</style><path class="eckhj5bmo"/><path class="c8frlpb7o"/>`,
		"fallback": "arcticons:ichaival",
	});
}

export default Component;
