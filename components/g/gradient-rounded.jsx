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
		"content": `<style>.uh9-27b-z {
  fill: currentColor;
  d: path("M5.616 20q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h12.769q.69 0 1.153.463T20 5.616v12.769q0 .69-.462 1.153T18.384 20zM11 11v2h2v-2zm-4 0v2h2v-2zm2 2v2h2v-2zm4 0v2h2v-2zm-8 0v2h2v-2zm10-2v2h2v2h2v-2h-2v-2zm-8 4v2H5v1.385q0 .25.183.432t.433.183H7v-2h2v2h2v-2h2v2h2v-2h2v2h1.385q.25 0 .432-.183t.183-.433V17h-2v-2h-2v2h-2v-2h-2v2H9v-2zm12-4v2zm0 4v2z");
}
</style><path class="uh9-27b-z"/>`,
		"fallback": "material-symbols-light:gradient-rounded",
	});
}

export default Component;
