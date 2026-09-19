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
		"content": `<style>.atu45yblr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.153 42.56a21.498 21.498 0 1 1 22.009-.188");
}

.yypc16btt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.157 35.113a12.285 12.285 0 1 1 11.89-.112");
}

.zo9c_tbyt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21.784 28.63a4.915 4.915 0 1 1 .481.228");
}
</style><path class="yypc16btt"/><path class="atu45yblr"/><path class="zo9c_tbyt"/>`,
		"fallback": "arcticons:dotmobile",
	});
}

export default Component;
