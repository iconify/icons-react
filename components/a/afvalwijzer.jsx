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
		"content": `<style>.fntp09bni {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.771 11.04L38.147 5.5m-24.535 7.44h23.744L31.42 41.352h-6.952v-4.999A8.47 8.47 0 0 0 16 27.885h-2.388z");
}

.gvf3ggssh {
  cx: 15.749px;
  cy: 36.604px;
  r: 2.216px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.h7935f-1g {
  cx: 15.749px;
  cy: 36.604px;
  r: 5.896px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="h7935f-1g"/><path class="fntp09bni"/><circle class="gvf3ggssh"/>`,
		"fallback": "arcticons:afvalwijzer",
	});
}

export default Component;
