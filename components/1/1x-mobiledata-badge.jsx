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
		"content": `<style>.zb8w7j_ak {
  fill: currentColor;
  d: path("M3.616 20q-.691 0-1.153-.462T2 18.384V5.616q0-.691.463-1.153T3.616 4h16.769q.69 0 1.153.463T22 5.616v12.769q0 .69-.462 1.153T20.385 20zM7.5 16.5h1v-9h-3v1h2zm4.462 0h1.077l2.211-3.752l2.212 3.752h1.115l-2.77-4.73l2.5-4.27h-1.076l-1.962 3.348L13.308 7.5h-1.116l2.52 4.308z");
}
</style><path class="zb8w7j_ak"/>`,
		"fallback": "material-symbols-light:1x-mobiledata-badge",
	});
}

export default Component;
