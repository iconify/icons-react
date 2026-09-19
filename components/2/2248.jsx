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
		"content": `<style>.cm_xiujcg {
  width: 18.5px;
  height: 18.5px;
  x: 24px;
  y: 24px;
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}

.ieznx5rfm {
  width: 18.5px;
  height: 18.5px;
  x: 5.5px;
  y: 24px;
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}

.n7959htri {
  width: 18.5px;
  height: 18.5px;
  x: 5.5px;
  y: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}

.qy8a8dzsd {
  width: 18.5px;
  height: 18.5px;
  x: 24px;
  y: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}

.ze8fg4b9o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m16.805 38.25l-.001-10l-5.366 6.717h6.625m-6.625-21.904a3.313 3.313 0 0 1 6.624 0a3.1 3.1 0 0 1-.97 2.342c-1.34 1.176-5.654 4.345-5.654 4.345h6.625m11.874-6.687a3.313 3.313 0 0 1 6.625 0a3.1 3.1 0 0 1-.97 2.342c-1.34 1.176-5.655 4.345-5.655 4.345h6.625m-4.124 13.5a2.5 2.5 0 0 0-2.5 2.5h0a2.5 2.5 0 0 0 2.5 2.5h1.624a2.5 2.5 0 0 0 2.5-2.5h0a2.5 2.5 0 0 0-2.5-2.5m.001 0a2.5 2.5 0 0 0 2.5-2.5h0a2.5 2.5 0 0 0-2.5-2.5h-1.626a2.5 2.5 0 0 0-2.5 2.5h0a2.5 2.5 0 0 0 2.5 2.5m.001 0h1.625");
}
</style><rect class="qy8a8dzsd"/><rect class="ieznx5rfm"/><rect class="cm_xiujcg"/><rect class="n7959htri"/><path class="ze8fg4b9o"/>`,
		"fallback": "arcticons:2248",
	});
}

export default Component;
