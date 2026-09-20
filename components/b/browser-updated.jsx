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
		"content": `<style>.q1q1gvb6o {
  fill: currentColor;
  d: path("M7.192 20v-1.538l.77-.77H4.616q-.691 0-1.153-.462T3 16.077V5.616q0-.691.463-1.153T4.615 4h7.827v1H4.616q-.231 0-.424.192T4 5.616v10.461q0 .23.192.423t.423.192h14.77q.23 0 .423-.192t.192-.423V13h1v3.077q0 .69-.462 1.153t-1.153.462h-3.347l.77.77V20zm8.52-5.712L11.423 10l.708-.708l3.08 3.094V4h1v8.387l3.081-3.095L20 10z");
}
</style><path class="q1q1gvb6o"/>`,
		"fallback": "material-symbols-light:browser-updated",
	});
}

export default Component;
