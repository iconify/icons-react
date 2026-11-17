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
		"content": `<style>.cuyn6tgcc {
  fill: currentColor;
}

.ona1m0quq {
  d: path("M18.881 7.692a1 1 0 0 1 .341.752V17a1 1 0 0 1-1 1H13v2h7a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2h7v-2H5.778a1 1 0 0 1-1-1V8.444a1 1 0 0 1 .341-.752l6.222-5.445c.378-.329.94-.329 1.318 0ZM12 16h5.222V8.898L12 4.329L6.778 8.898V16Z");
}

.wzt7e922v {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("m12.659 2.247l6.222 5.445a1 1 0 0 1 .341.752V17a1 1 0 0 1-1 1H5.778a1 1 0 0 1-1-1V8.444a1 1 0 0 1 .341-.752l6.222-5.445c.378-.329.94-.329 1.318 0");
}
</style><g class="cuyn6tgcc"><path class="wzt7e922v"/><path class="ona1m0quq"/></g>`,
		"fallback": "coolicons:house-connection-bulk-sharp",
	});
}

export default Component;
