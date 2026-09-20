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
		"content": `<style>.arqqnwbgb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.311 5.99a2.63 2.63 0 0 0-3.921-.217a2.49 2.49 0 0 0 .032 3.317c.676.677 3.21 3.271 3.21 3.271");
}

.b6uireb0p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28.663 7.365L25.807 4.5l-3.123 3.113l2.855 2.865l2.594 9.744L38.398 9.99z");
}

.ft8uzubme {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.669 38.573h14.588V43.5H17.669zm7.294-4.783za2.61 2.61 0 0 1 2.609 2.61v2.173h-5.217v-2.174a2.61 2.61 0 0 1 2.608-2.608");
}

.s2_9qibeh {
  cx: 12.017px;
  cy: 23.84px;
  r: 2.415px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.t6v8oea_r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m13.72 25.552l9.192 9.246m-9.184-12.664l11.811-11.656");
}

.xganq6b3x {
  cx: 24.963px;
  cy: 36.447px;
  r: 0.75px;
  fill: currentColor;
}
</style><path class="ft8uzubme"/><circle class="s2_9qibeh"/><path class="t6v8oea_r"/><circle class="xganq6b3x"/><path class="b6uireb0p"/><path class="arqqnwbgb"/>`,
		"fallback": "arcticons:foreground",
	});
}

export default Component;
