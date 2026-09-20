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
		"content": `<style>.jgjyddcmd {
  fill: currentColor;
  d: path("M3.616 20q-.691 0-1.153-.462T2 18.384V5.616q0-.691.463-1.153T3.616 4h16.769q.69 0 1.153.463T22 5.616v12.769q0 .69-.462 1.153T20.385 20zm1.692-3.5h1v-4h4.615v4h1v-9h-1v4H6.308v-4h-1zm10.384-2h1v-2h2v-1h-2v-2h-1v2h-2v1h2z");
}
</style><path class="jgjyddcmd"/>`,
		"fallback": "material-symbols-light:h-plus-mobiledata-badge",
	});
}

export default Component;
