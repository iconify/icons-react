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
		"content": `<style>.a4neo9fvu {
  fill: currentColor;
  d: path("M4.616 19q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h4.981l2 2h7.789q.69 0 1.153.463T21 8.616v8.769q0 .69-.462 1.153T19.385 19zM14 18h2v-2h2v-2h-2v-2h2v-2h-2V8h-2v2h2v2h-2v2h2v2h-2z");
}
</style><path class="a4neo9fvu"/>`,
		"fallback": "material-symbols-light:folder-zip",
	});
}

export default Component;
