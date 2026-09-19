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
		"content": `<style>.ao73bib1z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M34.35 41v-8h2.619c1.48 0 2.681 1.203 2.681 2.687s-1.2 2.686-2.681 2.686H34.35");
}

.upxwd5bwx {
  cx: 37px;
  cy: 37px;
  r: 7px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.xg-iybcay {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.2 14.5h6.6a4 4 0 0 1 0 8a4 4 0 0 1 0 8h-6.6v-12m3.3 4h3.3");
}

.zl24bubmo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.271 41H8c-2.216 0-4-1.784-4-4V8c0-2.216 1.784-4 4-4h29c2.216 0 4 1.784 4 4v23.258");
}
</style><path class="zl24bubmo"/><path class="xg-iybcay"/><circle class="upxwd5bwx"/><path class="ao73bib1z"/>`,
		"fallback": "arcticons:booklive-plus",
	});
}

export default Component;
