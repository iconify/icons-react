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
		"content": `<style>.qj3s6ep-j {
  fill: currentColor;
  d: path("m243.61 157l-22.44-86a20 20 0 0 0-19.35-15H140V40a20 20 0 0 0-20-20H80a20 20 0 0 0-20 20v16h-5.82a20 20 0 0 0-19.35 15l-22.44 86a12 12 0 0 0-.39 3v32a20 20 0 0 0 20 20h192a20 20 0 0 0 20-20v-32a12 12 0 0 0-.39-3M84 44h32v12H84ZM57.27 80h141.46l17.74 68H39.53ZM36 188v-16h184v16Zm28-72a12 12 0 0 1 12-12h8a12 12 0 0 1 0 24h-8a12 12 0 0 1-12-12m48 0a12 12 0 0 1 12-12h8a12 12 0 0 1 0 24h-8a12 12 0 0 1-12-12m48 0a12 12 0 0 1 12-12h8a12 12 0 0 1 0 24h-8a12 12 0 0 1-12-12");
}
</style><path class="qj3s6ep-j"/>`,
		"fallback": "ph:cash-register-bold",
	});
}

export default Component;
