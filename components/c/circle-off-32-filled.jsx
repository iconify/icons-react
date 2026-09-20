import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.izxvme-db {
  fill: currentColor;
  d: path("M2.293 2.293a1 1 0 0 1 1.414 0l26 26a1 1 0 1 1-1.414 1.414l-3.127-3.127A13.94 13.94 0 0 1 16 30C8.268 30 2 23.732 2 16c0-3.506 1.288-6.712 3.418-9.168L2.293 3.707a1 1 0 0 1 0-1.414M16 2c7.732 0 14 6.268 14 14c0 2.962-.921 5.71-2.491 7.972L8.027 4.492A13.94 13.94 0 0 1 16 2");
}
</style><path class="izxvme-db"/>`,
		"fallback": "fluent:circle-off-32-filled",
	});
}

export default Component;
