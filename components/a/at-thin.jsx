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
		"content": `<style>.t5n3_eb1w {
  fill: currentColor;
  d: path("M128 28a100 100 0 0 0 0 200c20.76 0 42.52-6.23 58.21-16.66a4 4 0 1 0-4.43-6.67C167.35 214.27 147.24 220 128 220a92 92 0 1 1 92-92c0 31.32-15 36-24 36s-24-4.68-24-36V88a4 4 0 0 0-8 0v14.75a44 44 0 1 0 2.82 45.94C171.46 163.58 181.66 172 196 172c20 0 32-16.45 32-44A100.11 100.11 0 0 0 128 28m0 136a36 36 0 1 1 36-36a36 36 0 0 1-36 36");
}
</style><path class="t5n3_eb1w"/>`,
		"fallback": "ph:at-thin",
	});
}

export default Component;
