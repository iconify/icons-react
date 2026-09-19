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
		"content": `<style>.j3pmu0w-p {
  cx: 39.625px;
  cy: 8.92px;
  r: 2.875px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.k4qyefyhm {
  cx: 8.375px;
  cy: 39.08px;
  r: 2.875px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.lzb9mh8tx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.25 39.08h25.5");
}

.txa1wybgb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M36.75 8.92h-25.5");
}

.vjkaz5b6y {
  cx: 8.375px;
  cy: 18.973px;
  r: 2.875px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.wuoty2bix {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M36.75 29.027h-25.5");
}

.xpubp99eq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.25 18.973h25.5");
}

.yqfbmc8ul {
  cx: 39.625px;
  cy: 29.027px;
  r: 2.875px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="j3pmu0w-p"/><path class="txa1wybgb"/><circle class="vjkaz5b6y"/><path class="xpubp99eq"/><circle class="k4qyefyhm"/><path class="lzb9mh8tx"/><circle class="yqfbmc8ul"/><path class="wuoty2bix"/>`,
		"fallback": "arcticons:homescapes",
	});
}

export default Component;
