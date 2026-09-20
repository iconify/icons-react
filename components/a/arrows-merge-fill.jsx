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
		"content": `<style>.ffibqub6v {
  fill: currentColor;
  d: path("M192 40v64a8 8 0 0 1-2.34 5.66L136 163.31V192h24a8 8 0 0 1 5.66 13.66l-32 32a8 8 0 0 1-11.32 0l-32-32A8 8 0 0 1 96 192h24v-28.69l-53.66-53.65A8 8 0 0 1 64 104V40a8 8 0 0 1 16 0v60.69l48 48l48-48V40a8 8 0 0 1 16 0");
}
</style><path class="ffibqub6v"/>`,
		"fallback": "ph:arrows-merge-fill",
	});
}

export default Component;
