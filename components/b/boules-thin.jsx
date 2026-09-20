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
		"content": `<style>.ksj3b0uom {
  fill: currentColor;
  d: path("M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m62.13 32.21L60.21 190.13a92 92 0 0 1-14.88-21.8l123-123a92 92 0 0 1 21.8 14.88m5.66 5.66a92.2 92.2 0 0 1 14.88 21.8l-123 123a92.2 92.2 0 0 1-21.8-14.88ZM128 36a91.4 91.4 0 0 1 32.43 5.91L41.91 160.43A92 92 0 0 1 128 36m0 184a91.4 91.4 0 0 1-32.43-5.91L214.09 95.57A92 92 0 0 1 128 220");
}
</style><path class="ksj3b0uom"/>`,
		"fallback": "ph:boules-thin",
	});
}

export default Component;
