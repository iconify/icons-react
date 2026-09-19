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
		"content": `<style>.iok58zbkv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 21.944H15.778C10.1 21.944 5.5 26.546 5.5 32.222S10.102 42.5 15.778 42.5s10.278-4.601 10.278-10.278V5.5");
}
</style><path class="iok58zbkv"/>`,
		"fallback": "arcticons:hanping-popup",
	});
}

export default Component;
