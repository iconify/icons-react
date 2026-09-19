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
		"content": `<style>.gqx1elb0c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M34.75 17.795V5.38L24 11.587v24.826L13.25 42.62V30.206");
}

.tiyx7omux {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M34.749 30.207L45.5 24l-10.75-6.207l-21.5 12.413L2.5 24l10.751-6.207");
}

.ucfoyq-tj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m23.999 36.412l10.751 6.207V30.206l-21.5-12.413V5.38l10.751 6.207");
}
</style><path class="gqx1elb0c"/><path class="tiyx7omux"/><path class="ucfoyq-tj"/>`,
		"fallback": "arcticons:boamobile",
	});
}

export default Component;
