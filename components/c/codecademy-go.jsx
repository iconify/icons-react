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
		"content": `<style>.jhxq08bqg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M22.92 19.933a7.484 7.484 0 1 0 0 8.135m11.124 8.466H43.5");
}

.ui_10f22s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 11.466h25.067v25.067H4.5z");
}
</style><path class="ui_10f22s"/><path class="jhxq08bqg"/>`,
		"fallback": "arcticons:codecademy-go",
	});
}

export default Component;
