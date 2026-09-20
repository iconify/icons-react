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
		"content": `<style>.df7qmgmhn {
  cx: 16.239px;
  cy: 28.435px;
  r: 11.739px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.i0b0il08j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.24 16.696v-8.87h11.086A16.174 16.174 0 0 1 43.5 24a16.174 16.174 0 0 1-16.174 16.174H16.24");
}
</style><circle class="df7qmgmhn"/><path class="i0b0il08j"/>`,
		"fallback": "arcticons:discovery",
	});
}

export default Component;
