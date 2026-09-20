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
		"content": `<style>.cfj4d5bxa {
  fill: currentColor;
  d: path("M192.49 167.51a12 12 0 0 1 0 17l-32 32a12 12 0 0 1-17 0l-32-32a12 12 0 1 1 17-17L140 179v-51a12 12 0 0 1 24 0v51l11.51-11.52a12 12 0 0 1 16.98.03M160 36a92.08 92.08 0 0 0-81 48.37A68 68 0 1 0 72 220h12a12 12 0 0 0 0-24H72a44 44 0 0 1-1.81-87.95A91.7 91.7 0 0 0 68 128a12 12 0 0 0 24 0a68 68 0 0 1 136 0a67.3 67.3 0 0 1-7.25 30.59a12 12 0 1 0 21.42 10.82A91.1 91.1 0 0 0 252 128a92.1 92.1 0 0 0-92-92");
}
</style><path class="cfj4d5bxa"/>`,
		"fallback": "ph:cloud-arrow-down-bold",
	});
}

export default Component;
