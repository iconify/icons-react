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
		"content": `<style>.ju1k9lb1i {
  fill: currentColor;
  d: path("M3.198 4.523A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v4.1a5.5 5.5 0 0 0-2.5-.6a5.49 5.49 0 0 0-4.243 2H7.5a.5.5 0 0 0 0 1h2.1c-.384.75-.6 1.6-.6 2.5s.216 1.75.6 2.5H5.5A2.5 2.5 0 0 1 3 14.5V8.437A2.004 2.004 0 0 0 5.5 6.5a2 2 0 0 0-2.302-1.977M7.5 8a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM3 5.634a1 1 0 1 1 1 1.732a1 1 0 0 1-1-1.732M14.5 19a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m2-4h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1");
}
</style><path class="ju1k9lb1i"/>`,
		"fallback": "fluent:channel-subtract-20-filled",
	});
}

export default Component;
