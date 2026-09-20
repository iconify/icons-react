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
		"content": `<style>.qf43jb_jq {
  fill: currentColor;
  d: path("M5 19h9V5H5zm-2 2V3h18v18z");
}
</style><path class="qf43jb_jq"/>`,
		"fallback": "material-symbols:dock-to-left-sharp",
	});
}

export default Component;
