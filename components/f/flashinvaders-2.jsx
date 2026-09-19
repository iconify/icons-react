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
		"content": `<style>.jc1oydeao {
  width: 39px;
  height: 31px;
  x: 4.5px;
  y: 8.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}

.r52trebrd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M7.505 26.235h3.02v-5.466l3.093-.035l.072-2.877h3.02l-.036-5.573h-3.056v2.805h5.968v2.696h8.773l.072-2.768l5.896.036v-2.625l-3.02-.036v5.393l3.092.036v2.949h2.877l.072 5.609l3.02.071l.036 5.645l-2.913.036V29.4H34.4l.072 5.752h3.092l-.036-2.984l-9.096.036l.036 2.984l3.056-.036l-.144-5.968l-14.957.072l.036 5.824h3.2v-3.02l-6.184.072v-2.804h-3.092v5.788h3.092v-2.948h-5.97z");
}

.sc8shdbnj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m16.53 20.77l3.092.035v5.681l-3.092.036zm11.653.075l3.092.036v5.68l-3.092.036z");
}
</style><rect class="jc1oydeao"/><path class="r52trebrd"/><path class="sc8shdbnj"/>`,
		"fallback": "arcticons:flashinvaders-2",
	});
}

export default Component;
