import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fzy8njb1q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fzy8njb1q"/>`,
		"fallback": "lets-icons:folder-send-light",
	});
}

export default Component;
