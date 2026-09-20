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
		"content": `<style>.mhdb24x-v {
  fill: currentColor;
  d: path("M5.616 20q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h12.769q.69 0 1.153.463T20 5.616v12.769q0 .69-.462 1.153T18.384 20zM5 12.616h14v-7q0-.231-.192-.424T18.384 5H5.616q-.231 0-.424.192T5 5.616z");
}
</style><path class="mhdb24x-v"/>`,
		"fallback": "material-symbols-light:bottom-sheets-rounded",
	});
}

export default Component;
