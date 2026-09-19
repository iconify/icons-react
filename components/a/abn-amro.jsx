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
		"content": `<style>.qld0vfrkz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 29V4.5h-29V29L24 43.5z");
}

.z87t3gbjl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 43.5v-29L38.5 29");
}
</style><path class="qld0vfrkz"/><path class="z87t3gbjl"/>`,
		"fallback": "arcticons:abn-amro",
	});
}

export default Component;
