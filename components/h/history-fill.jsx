import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e6wlbubwn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e6wlbubwn"/>`,
		"fallback": "iconamoon:history-fill",
	});
}

export default Component;
