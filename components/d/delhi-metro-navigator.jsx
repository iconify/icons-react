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
		"content": `<style>.bn9n4ubgs {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  d: path("M3.506 30.5h40.988m-40.988-13h40.988M17.5 30.5l13-13");
}

.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="cpk0fnbgt"/><path class="bn9n4ubgs"/>`,
		"fallback": "arcticons:delhi-metro-navigator",
	});
}

export default Component;
