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
		"content": `<style>.qf1epc4gk {
  fill: currentColor;
  d: path("M220 128a4 4 0 0 1-4 4H40a4 4 0 0 1 0-8h176a4 4 0 0 1 4 4M98.83 50.83L124 25.66V96a4 4 0 0 0 8 0V25.66l25.17 25.17a4 4 0 1 0 5.66-5.66l-32-32a4 4 0 0 0-5.66 0l-32 32a4 4 0 0 0 5.66 5.66m58.34 154.34L132 230.34V160a4 4 0 0 0-8 0v70.34l-25.17-25.17a4 4 0 0 0-5.66 5.66l32 32a4 4 0 0 0 5.66 0l32-32a4 4 0 0 0-5.66-5.66");
}
</style><path class="qf1epc4gk"/>`,
		"fallback": "ph:arrows-out-line-vertical-thin",
	});
}

export default Component;
