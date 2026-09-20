import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.vxsm2cllo {
  fill: currentColor;
  d: path("M10.5 5a3 3 0 0 1 6 0v2l1.32 1.119a.5.5 0 0 1-.324.881H9.503a.5.5 0 0 1-.323-.881L10.5 7zm3 6a1.5 1.5 0 0 1-1.415-1h2.829a1.5 1.5 0 0 1-1.415 1M6 6h3.5V5H6a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h6a2 2 0 0 0 2-2v-3.05a2.5 2.5 0 0 1-1 0V15a1 1 0 0 1-1 1H6z");
}
</style><path class="vxsm2cllo"/>`,
		"fallback": "fluent:dual-screen-closed-alert-20-regular",
	});
}

export default Component;
