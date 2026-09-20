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
		"content": `<style>.bw_zaw63d {
  fill: currentColor;
  d: path("M6 19.5V5.616q0-.691.463-1.153T7.616 4h6.153q-.384.596-.577 1.197T13 6.5q0 1.742 1.157 3.012T17 10.958q.287.036.5.036t.5-.036V19.5l-6-2.577zM17 9V7h-2V6h2V4h1v2h2v1h-2v2z");
}
</style><path class="bw_zaw63d"/>`,
		"fallback": "material-symbols-light:bookmark-add",
	});
}

export default Component;
