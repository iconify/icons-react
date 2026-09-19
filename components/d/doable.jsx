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
		"content": `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.mj-toybgo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m19.947 24.16l4.34 4.34l9-9m-9.979 4.745l4.745-4.745m-13.34 4.66l4.34 4.34l.809-.808");
}
</style><circle class="cpk0fnbgt"/><path class="mj-toybgo"/>`,
		"fallback": "arcticons:doable",
	});
}

export default Component;
