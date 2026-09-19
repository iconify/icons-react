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
		"content": `<style>.bzyu1xbpt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.581 28.74v-3.897m0 3.897l1.517 1.518");
}

.lowdoxgai {
  d: path("M4.5 18.295v18.72a2.18 2.18 0 0 0 2.16 2.2h34.66a2.18 2.18 0 0 0 2.18-2.18v-.02h0v-18.72");
}

.oiiq0cbol {
  cx: 33.581px;
  cy: 28.74px;
  r: 6px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.ttn166bcq {
  d: path("M41.68 13.015H24.77c-2-.1-5.93-4.23-8.19-4.23h-9.9a2.18 2.18 0 0 0-2.18 2.23h0v7.29h39v-3.42a1.83 1.83 0 0 0-1.79-1.87h-.03Z");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="oiiq0cbol"/><path class="bzyu1xbpt"/><g class="y9tr6bcfx"><path class="ttn166bcq"/><path class="lowdoxgai"/></g>`,
		"fallback": "arcticons:folder-clock",
	});
}

export default Component;
