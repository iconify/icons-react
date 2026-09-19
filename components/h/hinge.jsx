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
		"content": `<style>.nn-po-p7y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.504 28.318c2.912-5.75 5.59-4.886 15.743-4.897c4.353-.005 6.02-.455 7.849-3.287");
}

.ou_pblb2j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29c-2.2 0-4 1.8-4 4v29c0 2.2 1.8 4 4 4h29c2.2 0 4-1.8 4-4v-29c0-2.2-1.8-4-4-4m-23.996 6v25m15.743-25v25");
}
</style><path class="ou_pblb2j"/><path class="nn-po-p7y"/>`,
		"fallback": "arcticons:hinge",
	});
}

export default Component;
