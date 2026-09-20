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
		"content": `<style>.wf--g1ylh {
  fill: currentColor;
  d: path("M5.616 20q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h12.769q.69 0 1.153.463T20 5.616v12.769q0 .69-.462 1.153T18.384 20zM7.5 16.5h6v-1h-6zm0-4h9v-1h-9zm0-4h9v-1h-9z");
}
</style><path class="wf--g1ylh"/>`,
		"fallback": "material-symbols-light:article",
	});
}

export default Component;
