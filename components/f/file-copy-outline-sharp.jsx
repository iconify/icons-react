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
		"content": `<style>.tx_hffbgl {
  fill: currentColor;
  d: path("M6 19V1h9l6 6v12zm8-11V3H8v14h11V8zM2 23V7h2v14h11v2zM8 3v5zv14z");
}
</style><path class="tx_hffbgl"/>`,
		"fallback": "material-symbols:file-copy-outline-sharp",
	});
}

export default Component;
