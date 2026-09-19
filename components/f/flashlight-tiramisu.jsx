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

.kspuhxbhc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.913 19.14v7.653l-4.373 4.069V38.5h-9.08v-7.638l-4.373-4.069V19.14zM24 9.5v3.051m-11.07 1.414l2.157 2.157m19.984-2.157l-2.158 2.157");
}
</style><path class="kspuhxbhc"/><circle class="cpk0fnbgt"/>`,
		"fallback": "arcticons:flashlight-tiramisu",
	});
}

export default Component;
