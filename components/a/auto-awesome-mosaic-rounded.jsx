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
		"content": `<style>.x5t7dkw8y {
  fill: currentColor;
  d: path("M11 20H5.616q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4H11zm2-9V4h5.385q.69 0 1.152.463T20 5.616V11zm0 9v-7h7v5.385q0 .69-.462 1.152T18.384 20z");
}
</style><path class="x5t7dkw8y"/>`,
		"fallback": "material-symbols-light:auto-awesome-mosaic-rounded",
	});
}

export default Component;
