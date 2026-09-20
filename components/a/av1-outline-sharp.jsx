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
		"content": `<style>.irfqwbbft {
  fill: currentColor;
  d: path("M5.27 14.692h.884V13h2.269v1.692h.885V9.308H5.269zm.884-2.576v-1.924h2.269v1.924zm6 2.576h1.192l1.558-5.384h-.923L12.75 13.56l-1.23-4.252h-.924zm5.692 0h.885V9.308H16.5v.884h1.346zM2 19V5h20v14zm1-1h18V6H3zm0 0V6z");
}
</style><path class="irfqwbbft"/>`,
		"fallback": "material-symbols-light:av1-outline-sharp",
	});
}

export default Component;
