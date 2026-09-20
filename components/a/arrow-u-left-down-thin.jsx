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
		"content": `<style>.mc0m_1psp {
  fill: currentColor;
  d: path("M204 88v88a4 4 0 0 1-8 0V88a52 52 0 0 0-104 0v126.34l41.17-41.17a4 4 0 0 1 5.66 5.66l-48 48a4 4 0 0 1-5.66 0l-48-48a4 4 0 0 1 5.66-5.66L84 214.34V88a60 60 0 0 1 120 0");
}
</style><path class="mc0m_1psp"/>`,
		"fallback": "ph:arrow-u-left-down-thin",
	});
}

export default Component;
