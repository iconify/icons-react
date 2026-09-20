import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cf0invbxn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cf0invbxn"/>`,
		"fallback": "mingcute:align-center-fill",
	});
}

export default Component;
