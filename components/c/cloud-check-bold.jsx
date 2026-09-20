import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.gghbdp9yv {
  fill: currentColor;
  d: path("M160 36a92.09 92.09 0 0 0-81 48.36A68 68 0 1 0 72 220h88a92 92 0 0 0 0-184m0 160H72a44 44 0 0 1-1.82-88A92 92 0 0 0 68 128a12 12 0 0 0 24 0a68 68 0 1 1 68 68m40.49-92.49a12 12 0 0 1 0 17l-48 48a12 12 0 0 1-17 0l-24-24a12 12 0 1 1 17-17L144 143l39.51-39.52a12 12 0 0 1 16.98.03");
}
</style><path class="gghbdp9yv"/>`,
		"fallback": "ph:cloud-check-bold",
	});
}

export default Component;
