import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e_ny91lky.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e_ny91lky"/>`,
		"fallback": "mdi:file-document-box-remove-outline",
	});
}

export default Component;
