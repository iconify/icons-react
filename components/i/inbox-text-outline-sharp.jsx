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
		"content": `<style>.uv6fibu1t {
  fill: currentColor;
  d: path("M7.5 11.904h9v-1h-9zm0-3.077h9v-1h-9zM4 20V4h16v16zm1-1h14v-3.384h-3.577q-.557.95-1.46 1.475T12 17.616t-1.963-.525t-1.46-1.475H5zm8.725-2.934q.775-.55 1.075-1.45H19V5H5v9.616h4.2q.3.9 1.075 1.45t1.725.55t1.725-.55M5 19h14z");
}
</style><path class="uv6fibu1t"/>`,
		"fallback": "material-symbols-light:inbox-text-outline-sharp",
	});
}

export default Component;
