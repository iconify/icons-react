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
		"content": `<style>.cdj0hjb9l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m10.925 30.52l26.15-.063L23.968 43.5L10.925 30.521");
}

.h_hgy3b5i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.925 4.563v25.958L37.075 4.5v25.957z");
}
</style><path class="h_hgy3b5i"/><path class="cdj0hjb9l"/>`,
		"fallback": "arcticons:genskill",
	});
}

export default Component;
