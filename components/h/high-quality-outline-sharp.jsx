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
		"content": `<style>.c-zx_kv-f {
  fill: currentColor;
  d: path("M14.75 16.5h1.5V15H18V9h-5v6h1.75zM6 15h1.5v-2h2v2H11V9H9.5v2.5h-2V9H6zm8.5-1.5v-3h2v3zM2 20V4h20v16zm2-2h16V6H4zm0 0V6z");
}
</style><path class="c-zx_kv-f"/>`,
		"fallback": "material-symbols:high-quality-outline-sharp",
	});
}

export default Component;
