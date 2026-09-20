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
		"content": `<style>.mit_bkbvf {
  fill: currentColor;
  d: path("M5.616 17q-.691 0-1.153-.462T4 15.385v-6.77q0-.69.463-1.152T5.616 7h12.769q.69 0 1.153.463T20 8.616v6.769q0 .69-.462 1.153T18.384 17z");
}
</style><path class="mit_bkbvf"/>`,
		"fallback": "material-symbols-light:crop-3-2-rounded",
	});
}

export default Component;
