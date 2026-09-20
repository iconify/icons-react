import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ix2_4ebjl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ix2_4ebjl"/>`,
		"fallback": "lets-icons:folder-file-fill",
	});
}

export default Component;
