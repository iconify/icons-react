import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.v_no2yg2p {
  fill: currentColor;
  d: path("m16.112 21l-.689-.688l2.1-2.1l-2.1-2.1l.689-.689l2.1 2.1l2.1-2.1l.688.689l-2.075 2.1l2.075 2.1l-.688.688l-2.1-2.075zm-8.227 0V4.48h2.423V3h3.384v1.48h2.424v8.259q-1.706.659-2.735 2.146t-1.029 3.332q0 .739.17 1.44q.168.703.526 1.343z");
}
</style><path class="v_no2yg2p"/>`,
		"fallback": "material-symbols-light:battery-error-sharp",
	});
}

export default Component;
