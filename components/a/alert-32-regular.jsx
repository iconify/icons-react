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
		"content": `<style>.n715ppbdp {
  fill: currentColor;
  d: path("M16 4a9 9 0 0 0-9 9v4.803l-1.929 4.826A1 1 0 0 0 6 24h6c0 2.217 1.783 4 4 4s4-1.783 4-4h6a1 1 0 0 0 .929-1.371L25 17.803V13a9 9 0 0 0-9-9m2 20c0 1.112-.888 2-2 2s-2-.888-2-2zM9 13a7 7 0 1 1 14 0v4.995a1 1 0 0 0 .071.371L24.523 22H7.477l1.452-3.634a1 1 0 0 0 .071-.37z");
}
</style><path class="n715ppbdp"/>`,
		"fallback": "fluent:alert-32-regular",
	});
}

export default Component;
