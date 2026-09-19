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
		"content": `<style>.p8ft86b0n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14 4.5h-3.5a2 2 0 0 0-2 2v35a2 2 0 0 0 2 2h27a2 2 0 0 0 2-2v-35a2 2 0 0 0-2-2H24");
}

.plp2zlboe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m12 4.5l1.414-1.414a2 2 0 0 1 1.414-.586H23a1 1 0 0 1 1 1v25l-5-5l-5 5v-24M14 38h20M24 10h10m-10 7h10m-10 7h10m-20 7h20");
}
</style><path class="p8ft86b0n"/><path class="plp2zlboe"/>`,
		"fallback": "arcticons:document-viewer",
	});
}

export default Component;
