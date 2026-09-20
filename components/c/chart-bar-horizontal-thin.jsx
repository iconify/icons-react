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
		"content": `<style>.zuuvm3mrj {
  fill: currentColor;
  d: path("M224 100h-44V56a4 4 0 0 0-4-4H52V40a4 4 0 0 0-8 0v176a4 4 0 0 0 8 0v-12h92a4 4 0 0 0 4-4v-44h76a4 4 0 0 0 4-4v-48a4 4 0 0 0-4-4m-52-40v40H52V60Zm-32 136H52v-40h88Zm80-48H52v-40h168Z");
}
</style><path class="zuuvm3mrj"/>`,
		"fallback": "ph:chart-bar-horizontal-thin",
	});
}

export default Component;
