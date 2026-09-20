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
		"content": `<style>.vt2fb1vvy {
  fill: currentColor;
  d: path("M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m42.83-94.83a4 4 0 0 1 0 5.66l-32 32a4 4 0 0 1-5.66-5.66L158.34 132H88a4 4 0 0 1 0-8h70.34l-25.17-25.17a4 4 0 0 1 5.66-5.66Z");
}
</style><path class="vt2fb1vvy"/>`,
		"fallback": "ph:arrow-circle-right-thin",
	});
}

export default Component;
