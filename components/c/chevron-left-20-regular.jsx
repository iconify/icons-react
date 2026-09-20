import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ti4xdpbxp {
  fill: currentColor;
  d: path("M12.353 15.854a.5.5 0 0 1-.707.001L6.162 10.39a.55.55 0 0 1 0-.78l5.484-5.464a.5.5 0 1 1 .706.708L7.188 10l5.164 5.147a.5.5 0 0 1 .001.707");
}
</style><path class="ti4xdpbxp"/>`,
		"fallback": "fluent:chevron-left-20-regular",
	});
}

export default Component;
