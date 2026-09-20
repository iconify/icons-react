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
		"content": `<style>.cme_3tb_p {
  fill: currentColor;
  d: path("M160 36a92.09 92.09 0 0 0-81 48.36A68 68 0 1 0 72 220h88a92 92 0 0 0 0-184m0 160H72a44 44 0 0 1-1.82-88A92 92 0 0 0 68 128a12 12 0 0 0 24 0a68 68 0 1 1 68 68m32.49-79.51L177 132l15.52 15.51a12 12 0 0 1-17 17L160 149l-15.51 15.52a12 12 0 1 1-17-17L143 132l-15.52-15.51a12 12 0 1 1 17-17L160 115l15.51-15.52a12 12 0 0 1 17 17Z");
}
</style><path class="cme_3tb_p"/>`,
		"fallback": "ph:cloud-x-bold",
	});
}

export default Component;
