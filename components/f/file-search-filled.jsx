import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w3nlvcvue.css';
import '../../css/l/llokiq9ox.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w3nlvcvue"/><path class="llokiq9ox"/>`,
		"fallback": "boxicons:file-search-filled",
	});
}

export default Component;
