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
		"content": `<style>.d-p-09yfe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21.6 27.977v-7.954l5.27 7.954v-7.954m-13.1 5.287v.032a2.635 2.635 0 0 1-5.27 0v-2.684a2.635 2.635 0 0 1 5.27 0v.032M15.844 24h2.593m1.384 3.977h-3.977v-7.954h3.977M29.03 24h2.593m1.384 3.977H29.03v-7.954h3.977");
}

.k9l19mbpj {
  width: 5.27px;
  height: 7.954px;
  x: 34.23px;
  y: 20.023px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2.635px;
  ry: 2.635px;
}

.ll0g54h-q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29c-2.2 0-4 1.8-4 4v29c0 2.2 1.8 4 4 4h29c2.2 0 4-1.8 4-4v-29c0-2.2-1.8-4-4-4");
}
</style><path class="ll0g54h-q"/><path class="d-p-09yfe"/><rect class="k9l19mbpj"/>`,
		"fallback": "arcticons:ceneo",
	});
}

export default Component;
