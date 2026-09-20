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
		"content": `<style>.mu1a4bbge {
  fill: currentColor;
  d: path("M188 40v64a4 4 0 0 1-1.17 2.83L132 161.66v60.68l25.17-25.17a4 4 0 0 1 5.66 5.66l-32 32a4 4 0 0 1-5.66 0l-32-32a4 4 0 0 1 5.66-5.66L124 222.34v-60.68l-54.83-54.83A4 4 0 0 1 68 104V40a4 4 0 0 1 8 0v62.34l52 52l52-52V40a4 4 0 0 1 8 0");
}
</style><path class="mu1a4bbge"/>`,
		"fallback": "ph:arrows-merge-thin",
	});
}

export default Component;
