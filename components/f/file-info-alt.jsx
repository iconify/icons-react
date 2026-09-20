import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/po4ezxent.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="po4ezxent"/>`,
		"fallback": "uil:file-info-alt",
	});
}

export default Component;
