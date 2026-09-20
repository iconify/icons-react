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
		"content": `<style>.rwar_cc_z {
  fill: currentColor;
  d: path("M93.17 58.83a4 4 0 0 1 0-5.66l32-32a4 4 0 0 1 5.66 0l32 32a4 4 0 0 1-5.66 5.66L132 33.66V96a4 4 0 0 1-8 0V33.66L98.83 58.83a4 4 0 0 1-5.66 0m64 138.34L132 222.34V160a4 4 0 0 0-8 0v62.34l-25.17-25.17a4 4 0 0 0-5.66 5.66l32 32a4 4 0 0 0 5.66 0l32-32a4 4 0 0 0-5.66-5.66m77.66-72l-32-32a4 4 0 0 0-5.66 5.66L222.34 124H160a4 4 0 0 0 0 8h62.34l-25.17 25.17a4 4 0 0 0 5.66 5.66l32-32a4 4 0 0 0 0-5.66M33.66 132H96a4 4 0 0 0 0-8H33.66l25.17-25.17a4 4 0 0 0-5.66-5.66l-32 32a4 4 0 0 0 0 5.66l32 32a4 4 0 1 0 5.66-5.66Z");
}
</style><path class="rwar_cc_z"/>`,
		"fallback": "ph:arrows-out-cardinal-thin",
	});
}

export default Component;
