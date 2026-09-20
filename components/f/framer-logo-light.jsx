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
		"content": `<style>.d5_s9fbbi {
  fill: currentColor;
  d: path("M206 104V40a6 6 0 0 0-6-6H56a6 6 0 0 0-4 10.48L112.22 98H56a6 6 0 0 0-6 6v64a6 6 0 0 0 1.76 4.24l72 72A6 6 0 0 0 134 240v-66h66a6 6 0 0 0 4-10.48L143.78 110H200a6 6 0 0 0 6-6m-21.78 58H128a6 6 0 0 0-6 6v57.51l-60-60V110h63.72ZM194 98h-63.72l-58.5-52H194Z");
}
</style><path class="d5_s9fbbi"/>`,
		"fallback": "ph:framer-logo-light",
	});
}

export default Component;
