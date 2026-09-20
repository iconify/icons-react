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
		"content": `<style>.c-lsjibht {
  fill: currentColor;
  d: path("M5.27 14.692h.884V13h2.115v1.692h.885V9.308H5.269zm.884-2.576v-1.924h2.115v1.924zm5.346 2.576h1.192l1.558-5.384h-.923l-1.23 4.252l-1.231-4.252h-.924zm3.346 0h3.885v-1.461h-.885v.577h-2.115v-3.616h2.115v.616h.885v-1.5h-3.885zM2 19V5h20v14z");
}
</style><path class="c-lsjibht"/>`,
		"fallback": "material-symbols-light:avc-sharp",
	});
}

export default Component;
