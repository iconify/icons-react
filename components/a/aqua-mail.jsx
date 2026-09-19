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

.d-obumi_v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m9.986 40.303l12.203-9.238a3 3 0 0 1 3.622 0l12.2 9.243m-17-8.352L3.496 17.517m23.503 14.449L44.51 17.53m-7.84.417l-10.78 8.872a3.105 3.105 0 0 1-3.947-.002l-10.77-8.878c9.215-2.828 14.002 5.993 25.496.008");
}
</style><circle class="cpk0fnbgt"/><path class="d-obumi_v"/>`,
		"fallback": "arcticons:aqua-mail",
	});
}

export default Component;
