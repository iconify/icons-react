import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.w7p4y8d4h {
  fill: currentColor;
  d: path("M19.107 9.168a4.5 4.5 0 1 1 1.06-1.06l2.613 2.612a.75.75 0 1 1-1.06 1.06zM19.5 5.5a3 3 0 1 0-6 0a3 3 0 0 0 6 0m-.5 4.976v10.769a.75.75 0 0 1-1.188.609l-5.81-4.181l-5.812 4.18a.75.75 0 0 1-1.188-.608V6.249a3.25 3.25 0 0 1 3.25-3.25H11.6c-.238.466-.412.97-.51 1.5H8.252a1.75 1.75 0 0 0-1.75 1.75v13.532l5.061-3.64a.75.75 0 0 1 .876 0l5.061 3.64V10.91a5.5 5.5 0 0 0 1.45-.484z");
}
</style><path class="w7p4y8d4h"/>`,
		"fallback": "fluent:bookmark-search-24-regular",
	});
}

export default Component;
