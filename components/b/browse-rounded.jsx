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
		"content": `<style>.dd0he05yr {
  fill: currentColor;
  d: path("M4 13V5.616q0-.691.463-1.153T5.616 4H11v9zm9-9h5.385q.69 0 1.152.463T20 5.622V9h-7zm0 16v-9h7v7.385q0 .69-.462 1.152T18.384 20zm-9-5h7v5H5.616q-.691 0-1.153-.462T4 18.378z");
}
</style><path class="dd0he05yr"/>`,
		"fallback": "material-symbols-light:browse-rounded",
	});
}

export default Component;
