import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i-zbrzxta.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i-zbrzxta"/>`,
		"fallback": "griddy-icons:folder-download-filled",
	});
}

export default Component;
