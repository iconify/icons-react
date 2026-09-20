import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.qg_gpib-l {
  fill: currentColor;
  d: path("M4.585 1.085a2 2 0 0 1 2.83 0l3.5 3.5a2 2 0 0 1 0 2.827l-3.5 3.5a2 2 0 0 1-2.83 0l-3.499-3.5a2 2 0 0 1 0-2.828zm3.269 3.06a.5.5 0 0 0-.707 0L6 5.293L4.854 4.146a.5.5 0 0 0-.707.707l1.146 1.146l-1.146 1.147a.5.5 0 0 0 .707.707L6 6.706l1.147 1.147a.5.5 0 1 0 .707-.707L6.707 5.999l1.147-1.146a.5.5 0 0 0 0-.707");
}
</style><path class="qg_gpib-l"/>`,
		"fallback": "fluent:diamond-dismiss-12-filled",
	});
}

export default Component;
