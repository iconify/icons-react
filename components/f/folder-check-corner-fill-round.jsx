import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddw29zbip.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ddw29zbip"/>`,
		"fallback": "coolicons:folder-check-corner-fill-round",
	});
}

export default Component;
