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
		"content": `<style>.hnko-m70h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21.97 21.97L32.7 15.3l-6.67 10.73M24 13.125V9.5m0 29v-3.625M34.875 24H38.5m-29 0h3.625");
}

.l6cd208_p {
  cx: 24px;
  cy: 24px;
  r: 18.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.v36ah1bct {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21.97 21.97L32.7 15.3l-6.67 10.73m-4.06-4.06L15.3 32.7l10.73-6.67");
}
</style><path class="v36ah1bct"/><path class="hnko-m70h"/><circle class="l6cd208_p"/>`,
		"fallback": "arcticons:emoji-compass",
	});
}

export default Component;
