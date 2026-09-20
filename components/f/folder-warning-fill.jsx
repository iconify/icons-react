import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v50-1gblb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v50-1gblb"/>`,
		"fallback": "mingcute:folder-warning-fill",
	});
}

export default Component;
