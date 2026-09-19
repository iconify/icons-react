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
		"content": `<style>.he0znwbih {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 2.5c11.879 0 21.5 9.621 21.5 21.5S35.879 45.5 24 45.5S2.5 35.879 2.5 24S12.121 2.5 24 2.5");
}

.n2jyhl_6j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 24h13c0 7.183-5.817 13-13 13s-13-5.817-13-13s5.818-13 13-13a12.95 12.95 0 0 1 8.27 2.968");
}
</style><path class="he0znwbih"/><path class="n2jyhl_6j"/>`,
		"fallback": "arcticons:circledient-icon",
	});
}

export default Component;
