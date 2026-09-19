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
		"content": `<style>.hkqjirbza {
  cx: 24.012px;
  cy: 17.947px;
  r: 5.531px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.nfvyc7zti {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.886 22.647c-2.906-4.643-.813-12.473 3.618-15.691a12.47 12.47 0 0 1 14.862 0c4.733 3.622 6.612 10.908 3.706 15.55L23.935 40.302ZM17.111 43.5h13.8");
}
</style><path class="nfvyc7zti"/><circle class="hkqjirbza"/>`,
		"fallback": "arcticons:baidu-map",
	});
}

export default Component;
