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
		"content": `<style>.l52tmd6vq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.5 4.5a2 2 0 0 0-2 2v35a2 2 0 0 0 2 2h27a2 2 0 0 0 2-2v-26h-9a2 2 0 0 1-.334-.066l-4.086 7.054l3.4.033l-12.117 18.487l4.471-14.281l-3.582.011l5.312-14.96H28.5V4.5zm18 7.277V13.5a2 2 0 0 0 1.666 1.934M28.5 4.5l11 11");
}
</style><path class="l52tmd6vq"/>`,
		"fallback": "arcticons:blitznote",
	});
}

export default Component;
